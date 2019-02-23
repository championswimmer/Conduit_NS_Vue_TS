import { LoginRequest, User, UserResponse } from './models/users'
import { JsonHttpClient } from '@/utils/http'
import { Article, ArticlesResponse } from '@/api/models/articles'

const BASE_URL = 'https://conduit.productionready.io/api'
const client = new JsonHttpClient(BASE_URL)

export async function getArticles(): Promise<Array<Article>> {
  const resp = await client.get<ArticlesResponse>('articles?limit=200')
  if (resp && resp.articles) {
    return resp.articles
  } else {
    throw new Error('Error fetching articles')
  }
}

export async function loginUser(creds: LoginRequest): Promise<User> {
  const resp = await client.post<LoginRequest, UserResponse>(
    'users/login',
    creds,
  )
  if (resp && resp.user) {
    return resp.user
  } else {
    throw new Error('Error in login')
  }
}