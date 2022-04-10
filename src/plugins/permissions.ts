import { VueConstructor } from 'vue/types/vue'
import AuthStore from '@/store/modules/AuthStore'

export const permissionsCheck = {
  install (Vue: VueConstructor) {
    Vue.prototype.$can = function (requiredPermission: string) {
      if (AuthStore.getAuthenticatedUser) {
        return AuthStore.getAuthenticatedUser.permissions.find((permission: string) => permission === requiredPermission)
      }
      return false
    }
  }
}
