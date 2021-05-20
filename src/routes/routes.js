import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'


//VISTA ADMINISTRADOR
import Unidades from 'src/pages/Unidades.vue'
import Usuarios from 'src/pages/Usuarios.vue'
import Roles from 'src/pages/Roles.vue'
import Tramites from 'src/pages/Tramites.vue'
import Reportes from 'src/pages/Reportes.vue'

//VISTA USUARIO
import UserProfile from 'src/pages/UserProfile.vue'
import UserTramite from 'src/pages/UserTramite.vue'

//PANEL ADMNISTRADOR
import Overview from 'src/pages/Overview.vue'
import Icons from 'src/pages/Icons.vue'
import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
  
      {
        path: 'unidades-orgánicas',
        name: 'Unidades',
        component: Unidades
      },
      {
        path: 'usuarios',
        name: 'Usuarios',
        component: Usuarios
      },
      {
        path: 'roles',
        name: 'Roles',
        component: Roles
      },
      {
        path: 'tramites',
        name: 'Tramites',
        component: Tramites
      },
      {
        path: 'reportes',
        name: 'Reportes',
        component: Reportes
      },


      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
 
      {
        path: 'user-tramite',
        name: 'UserTramite',
        component: UserTramite
      },

      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },

      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
