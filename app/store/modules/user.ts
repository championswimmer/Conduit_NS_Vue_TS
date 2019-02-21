import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { loginUser } from '@/api/realworld-api'
import { LoginRequest, User } from '@/api/models/users'

@Module({ dynamic: true, store, name: 'user', namespaced: true })
class UserModule extends VuexModule {
  user: User

  @MutationAction({ mutate: [ 'user' ] })
  async loginUser(creds: LoginRequest) {
    const user = await loginUser(creds)
    return { user }
  }
}

export default getModule(UserModule)