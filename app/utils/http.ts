import { path } from 'tns-core-modules/file-system'
import { getJSON } from 'tns-core-modules/http'

export class JsonHttpClient {
  baseURL: string | undefined
  headers: any = { 'Content-Type': 'application/json' }

  constructor(baseURL?: string, headers?: any) {
    this.baseURL = baseURL
    this.headers = headers

  }

  private makePath(url: string): string {
    if (!this.baseURL) {
      return url
    } else {
      return path.join(this.baseURL, url)
    }
  }

  async get<Resp = {}>(url: string) {
    return await getJSON<Resp>({
      url: this.makePath(url),
      method: 'GET',
      headers: this.headers,
    })
  }

  async post<Req = {}, Resp = {}>(url: string, body?: Req) {
    return await getJSON<Resp>({
      url: this.makePath(url),
      method: 'POST',
      content: JSON.stringify(body || {}),
    })
  }
}