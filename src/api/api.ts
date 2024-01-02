import axios, { AxiosResponse, Method } from 'axios'
import { ResponseIF } from './models'

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 30 * 1000, // 30 sek.
})

export function callService<T>(
  method: Method,
  url: string,
  data?: object
): Promise<ResponseIF<T>> {
  return instance(url, { data, method })
    .then((result: AxiosResponse<ResponseIF<T>>) => {
      return result.data
    })
    .catch((error: any) => {
      if (error.response) {
        // Log bad response
        console.log(
          `Failed to call Service with status: ${
            error.response.status
          }, data: ${JSON.stringify(
            error.response.data
          )}, headers: ${JSON.stringify(error.response.headers)}`
        )
      } else if (error.request) {
        // Log no response
        console.log(
          `Failed to call BFT. Request: ${JSON.stringify(error.request)}`
        )
      } else {
        // Log other error
        console.log(`Failed to call BFT. Error: ${JSON.stringify(error)}`)
      }
      throw error
    })
}
