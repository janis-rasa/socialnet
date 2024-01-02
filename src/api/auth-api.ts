import { ResponseIF } from './models'
import { UserAuthIF, UserIF } from '../types/users'
import { callService } from './api'

const authAPI = {
  async loginUser(loginData: UserAuthIF): Promise<ResponseIF<UserIF>> {
    const response = await callService<UserIF>('post', 'login', loginData)
    return response
  },
  async logoutUser() {
    const response = await callService('post', 'logout')
    return response
  },
}

export default authAPI
