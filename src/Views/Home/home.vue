<template>
<div>
<div class="rgba styleForm">
  <button class="addUser" v-on:click="changesAddUser">AGREGAR USUARIO</button>
 
  <template v-if="createUser">
   <br />
 <input v-for="(item) in dataFiel"
         :type="[[ item.type ]]"
         :placeholder="[[ item.name ]]"
         :name="[[ item.name ]]"
         v-on:change="changesForm"
         
    />
     <button v-on:click="saveUser">GUARDAR USUARIO</button>
     </template>
</div>

<div class="rgba styleContentTable">
   
    <h5>Users</h5>
    <table class="tableStyle">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
           <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in info">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.username}}</td>
          <td>{{item.email}}</td>
          <td>{{item.address.street}}</td>
          <td>{{item.company.name}}</td>
          <td><router-link :to="{ name: 'Todos', params: { id:  item.id }}" > View todos</router-link></td>
        </tr>
     
      </tbody>
    </table>
 

    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      info: null,
      createUser: false,
      dataForm: {},
      dataFiel:[
        {
          type: 'text',
          name:'name'
        },
        {
          type: 'text',
          name:'username'
        },
        {
          type: 'email',
          name:'email'
        },
        {
          type: 'text',
          name:'address'
        },
        {
          type:'text',
          name: 'company'
        }
      ]
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.info = response.data))
  },
  methods: {
    changesForm: function(event){
      this.dataForm = {...this.dataForm,[event.target.name] : event.target.value }
    },
    changesAddUser: function(){
      this.createUser = !this.createUser
    },
    saveUser: function (event){
      const getLastId = this.info[this.info.length - 1].id + 1
      const objectNewUser ={
        id: getLastId,
        name: this.dataForm.name,
        username: this.dataForm.username,
        email: this.dataForm.email,
        address: {
          street: this.dataForm.address,
        },
        company: {
          name: this.dataForm.company
        }
      }
      this.info =[...this.info, objectNewUser] 

    }
  }
}
</script>
