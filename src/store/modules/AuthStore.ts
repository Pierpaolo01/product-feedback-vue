import { getModule, Module, VuexModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({
  namespaced: true,
  name: 'authStore',
  store,
  dynamic: true
})
class AuthStore extends VuexModule {
  // TODO set user TYPE
  public authenticatedUser: any | null = null;
}

export default getModule(AuthStore)
