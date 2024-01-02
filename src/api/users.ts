import { UserIF } from '../types/users'
import { callService } from './api'
import { ResponseIF } from './models'

const usersAPI = {
  async getUser(userId: string): Promise<ResponseIF<UserIF>> {
    const response = await callService<UserIF>('post', `users/${userId}`)
    return response
  },
}

export default usersAPI
