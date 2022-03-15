import axios, { AxiosPromise } from 'axios'
import { UserSignup } from '@/types/UserSignup'

export default class AuthService {
  public static authenticateUser (payload: UserSignup):AxiosPromise<UserSignup> {
    return axios.post('/signup', payload)
  }
}
