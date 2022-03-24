<template>
<div>
<div class="rgba styleForm">
<h5>Agregar todo</h5>
    <input 
         type="text"
         placeholder="title"
         name="title"
         :value="[[this.dataForm.title]]"
         v-on:change="changesForm"
    />
    <select name="completed" v-on:change="changesForm">
        <option value="1">completed</option>
        <option value="0" >Unfilled</option>
    </select>
    <button v-on:click="addTodo">Guardar</button>
</div>
<div class="rgba styleContentTable">

    <h5>Todos</h5>
    <table class="tableStyle">
      <thead>
        <tr>
            <th>Id</th>
            <th>title</th>
            <th>completed</th>
            <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in info">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.completed}}</td>
            <td>
                <button v-if="!item.completed" v-on:click="marcarItem(item.id)" class="buttonMarcar">Marcar</button>
                <button v-on:click="deleteItem(item.id)" class="buttonDelete">Eliminar</button>
            </td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Todos',
  data () {
    return {
      info: [],
      dataForm:{
          completed: true
      }
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/todos?userId='+this.$route.params.id)
      .then(response => (this.info = response.data))
  },
  methods: {
    marcarItem: function (id) {
        this.info= this.info.map(el => el.id == id ? {...el, completed: true} : el)
    },
    deleteItem: function (id){
        this.info= this.info.filter(el => el.id != id)
    },
    changesForm: function (event){
        let value = event.target.value;
        if(event.target.name === "completed") value = value == 0 ? false : true
        this.dataForm = {...this.dataForm,[event.target.name] : value }
    },
    addTodo : function(){
        let getLastId = 1;
        if(this.info.length > 0){
          getLastId = this.info[this.info.length - 1].id + 1;
        }
        const add = {...this.dataForm, id:getLastId }
        this.info =[...this.info, add],
        this.dataForm = {completed: this.dataForm.completed}
    }
  }
}
</script>
