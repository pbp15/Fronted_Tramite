<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>

     <sidebar-link to="/admin/unidades">
        <i class="nc-icon nc-vector"></i>
        <p>Und. Organicas</p>
      </sidebar-link>


        <sidebar-link to="/admin/usuarios">
        <i class="nc-icon nc-circle-09"></i>
        <p>Usuarios</p>
      </sidebar-link>

         <sidebar-link to="/admin/roles">
        <i class="nc-icon nc-bullet-list-67"></i>
        <p>Roles</p>
      </sidebar-link>

      <sidebar-link to="/admin/tramites">
        <i class="nc-icon nc-layers-3"></i>
        <p> Trámites</p>
      </sidebar-link>

       <sidebar-link to="/admin/reportes">
        <i class="nc-icon nc-notes"></i>
        <p>Reportes</p>
      </sidebar-link>




      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>   

      <sidebar-link to="/admin/user-tramite">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Tramite</p>
      </sidebar-link>

      <sidebar-link to="/admin/user-seguimiento">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Seguimiento</p>
      </sidebar-link>


      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
 
       <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
