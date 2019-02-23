<template>
  <StackLayout>
    <ListView for="article in articles">
      <v-template>
        <ArticleCard :article="article"></ArticleCard>
      </v-template>
    </ListView>
  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ArticleCard from '@/components/articles/ArticleCard.vue'
import feedModule from '@/store/modules/feed'
import { Article } from '@/api/models/articles'

@Component({
  components: {
    ArticleCard
  }
})
export default class GlobalFeed extends Vue {
  get articles () {
    return feedModule.globalFeed
  }
  async created () {
    await feedModule.fetchGlobalFeed()
  }
}

</script>

<style scoped>

</style>tns