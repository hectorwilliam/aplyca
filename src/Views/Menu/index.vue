<template>
    <div class="dashboardMenu rgba">
      <div class="itemMenu">
        <h2>System</h2>
      </div>
      <div class="itemMenu">
        <router-link :to="{ name: 'Home'}" >
            <img src="@/assets/customer.png"  class="icon"/>
            <h6>Users</h6>
        </router-link>
      </div>
      <div class="itemMenu"  v-on:click="logout">
            <img src="@/assets/logout.png"  class="icon"/>
            <h6>Cerrar sesión</h6>
      </div>
    </div>
</template>


<script>
export default {
  name: 'Menu',
  methods: {
    logout: function (id) {
      localStorage.removeItem("user")
      this.$router.push("/login");
    },
  
  }
}
</script>