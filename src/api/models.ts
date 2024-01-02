export interface LoginResponseIF {
  userId: string
}

export interface ResponseIF<T> {
  message: string
  success: boolean
  data?: T
}

export interface IsAuthIF {
  userId: string
  expireTimestamp: number
}
