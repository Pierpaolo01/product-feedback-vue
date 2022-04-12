import axios, { AxiosPromise } from 'axios'
import { UserCredentials } from '@/types/userCredentials'
import { AuthenticatedUser } from '@/types/authenticatedUser'
import { ApiResponse } from '@/types/apiResponse'

export default class AuthService {
  public static signupUser (payload: UserCredentials):AxiosPromise<UserCredentials> {
    return axios.post('/signup', payload)
  }

  public static authenticateUser (payload: UserCredentials):AxiosPromise<string> {
    return axios.post('/login', payload)
  }

  public static getAuthenticatedUserInfo (): AxiosPromise<ApiResponse<AuthenticatedUser>> {
    return axios.get('/api/user')
  }
}
