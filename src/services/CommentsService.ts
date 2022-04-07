import axios, { AxiosPromise } from 'axios'

export default class CommentService {
  public static getAllSuggestionComments (): AxiosPromise {
    return axios.get('/')
  }

  public static createSuggestionComment (suggestionId: string | number, comment: string): AxiosPromise {
    return axios.post(`/api/suggestion/${suggestionId}/comment`, { comment })
  }
}
