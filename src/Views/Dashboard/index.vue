<template>
    <div class="contenMain">
      <Menu />
        <div class="dashboardContent ">
          <div class="dashboardContentPadding">
            <div class="menu rgba">
              <div class="widthMenu">
                <img src="@/assets/lista.png"  class="iconMenu"/>
                <h6>Dashboard</h6>
              </div>
              <div class="widthMenu textRight">
                <div class="circular" v-bind:style="{ backgroundImage: 'url(https://media.ambito.com/p/3a35df14d8d5a3382878e60b8587836b/adjuntos/239/imagenes/039/497/0039497158/bradley-cooper.jpg)' }"></div>
                <h6>Aplyca</h6>
              </div>
            </div>
                <router-view/>
          </div>
        </div>
    </div>
    

</template>

<script>
import Menu from '../Menu/index.vue'
export default {
  name: 'Dashboard',
  components: {
    'Menu': Menu,

  },
}
</script>
