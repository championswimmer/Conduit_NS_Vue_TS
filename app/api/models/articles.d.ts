export interface ArticlesResponse {
  articles: (Article)[]
  articlesCount: number
}

export interface ArticleResponse {
  article: Article
}

export interface Article {
  slug: string
  title: string
  description: string
  body: string
  tagList?: (string)[] | null
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Author
}

export interface Author {
  username: string
  bio: string
  image: string
  following: boolean
}
