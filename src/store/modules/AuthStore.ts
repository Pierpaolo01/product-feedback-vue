import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { AuthenticatedUser } from '@/types/authenticatedUser'
@Module({
  namespaced: true,
  name: 'authStore',
  store,
  dynamic: true
})
class AuthStore extends VuexModule {
  // TODO set user TYPE
  public authenticatedUser: AuthenticatedUser | null = null;
  public authenticatedUserToken = '';

  get getAuthenticatedUser (): AuthenticatedUser | null {
    return this.authenticatedUser
  }

  get getAuthenticatedUserToken (): string {
    return this.authenticatedUserToken
  }

  @Mutation
  setAuthenticatedUser (user: AuthenticatedUser) {
    this.authenticatedUser = user
  }

  @Mutation
  setAuthenticatedUserToken (accessToken: string) {
    this.authenticatedUserToken = accessToken
  }
}

export default getModule(AuthStore)
