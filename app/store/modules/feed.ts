import { Module, VuexModule } from 'vuex-module-decorators'
import store from '@/store'


@Module({ dynamic: true, store, name: 'user', namespaced: true })
class FeedModule extends VuexModule {

}