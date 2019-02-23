import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { Article } from '@/api/models/articles'
import { getArticles } from '@/api/realworld-api'


@Module({ dynamic: true, store, name: 'feed', namespaced: true })
class FeedModule extends VuexModule {
  globalFeed: Article[]

  @MutationAction({ mutate: ['globalFeed'] })
  async fetchGlobalFeed() {
    const articles =  await getArticles()
    return {globalFeed: articles }
  }
}

export default getModule<FeedModule>(FeedModule)