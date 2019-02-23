<template>
  <CardView elevation="10" margin="10" radius="3">
    <StackLayout>
      <Label class="article-title" :text="article.title"></Label>
      <Label class="article-body" textWrap="true" :text="article.body"></Label>
    </StackLayout>
  </CardView>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Article } from '@/api/models/articles'

@Component
export default class ArticleCard extends Vue {
  @Prop() article: Partial<Article>
}
</script>

<style scoped>
CardView > StackLayout {
  margin: 20;
}

.article-title {
  font-weight: bold;
  font-size: 16pt;
}
</style>