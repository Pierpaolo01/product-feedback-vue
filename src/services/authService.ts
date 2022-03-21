import axios, { AxiosPromise } from 'axios'
import { UserCredentials } from '@/types/userCredentials'

export default class AuthService {
  public static signupUser (payload: UserCredentials):AxiosPromise<UserCredentials> {
    return axios.post('/signup', payload)
  }

  public static authenticateUser (payload: UserCredentials):AxiosPromise<string> {
    return axios.post('/login', payload)
  }

  public static testRoute () {
    //
  }
}
