export interface UserResponse {
  user: User
}

export interface User {
  email: string
  token: string
  username: string
  bio?: string
  image?: string
}

export interface LoginRequest {
  user: {
    email: string
    password: string
  }
}

export interface SignupRequest {
  user: {
    email: string
    password: string
    username: string
  }
}
