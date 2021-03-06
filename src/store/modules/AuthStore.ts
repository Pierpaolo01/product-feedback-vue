import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({
  namespaced: true,
  name: 'authStore',
  store,
  dynamic: true
})
class AuthStore extends VuexModule {
  // TODO set user TYPE
  public authenticatedUser: any | null = true;
  public authenticatedUserToken = '';

  get getAuthenticatedUser (): any {
    return this.authenticatedUser
  }

  get getAuthenticatedUserToken (): string {
    return this.authenticatedUserToken
  }

  @Mutation
  setAuthenticatedUser (user: any) {
    this.authenticatedUser = user
  }

  @Mutation
  setAuthenticatedUserToken (accessToken: string) {
    this.authenticatedUserToken = accessToken
  }
}

export default getModule(AuthStore)
