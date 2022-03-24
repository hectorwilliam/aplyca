<template>
    <div class="styleLoginMain">
    <div class="styleLogin rgba">
        <input
            type="text"
            name="user"
            placeholder="User"
            v-on:change="changesForm"
        />
        <input
            type="text"
            name="password"
            placeholder="Password"
            v-on:change="changesForm"
        />
        <button v-on:click="login">Iniciar sesión</button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      dataForm:{
      }
    }
  },
  methods: {
    changesForm: function (event) {
        this.dataForm = {...this.dataForm,[event.target.name] : event.target.value }
    },
    login: function (){
        if(Object.keys(this.dataForm).length <1 ){
            alert("Por favor completa todos los campos")
            return
        }
        localStorage.setItem('user', true);
        this.$router.push("/");
    }
  }
}
</script>

