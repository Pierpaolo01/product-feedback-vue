import { VueConstructor } from 'vue/types/vue'
import AuthStore from '@/store/modules/AuthStore'

const permissionsCheck = {
  install (Vue: VueConstructor) {
    Vue.prototype.$can = function (requiredPermission: string) {
      if (AuthStore.getAuthenticatedUser) {
        return !!AuthStore.getAuthenticatedUser.permissions.find((permission: string) => permission === requiredPermission)
      }
      return false
    }
  }
}

// {
// install (Vue: VueConstructor) {
//   Vue.prototype.can = function (requiredPermission: string) {
//     if (AuthStore.getAuthenticatedUser) {
//       console.log(AuthStore.getAuthenticatedUser.permissions.find((permission: string) => permission === requiredPermission))
//       return AuthStore.getAuthenticatedUser.permissions.find((permission: string) => permission === requiredPermission)
//     }
//     return false
//   }
// }
// }
export default permissionsCheck
