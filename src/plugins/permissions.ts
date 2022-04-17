import { VueConstructor } from 'vue/types/vue'
import AuthStore from '@/store/modules/AuthStore'

const permissionsCheck = {
  install (Vue: VueConstructor) {
    Vue.prototype.$can = function (requiredPermission: string, contentUserId?: number) {
      if (AuthStore.getAuthenticatedUser) {
        const userId = AuthStore.getAuthenticatedUser.id

        const contentBelongsToUser = userId === contentUserId
        return contentBelongsToUser || !!AuthStore.getAuthenticatedUser.permissions.includes(requiredPermission)
      }
      return false
    }
  }
}
export default permissionsCheck
