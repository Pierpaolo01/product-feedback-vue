import axios, { AxiosPromise } from 'axios'

export default class CommentService {
  public static getAllSuggestionComments (suggestionId: string | number): AxiosPromise {
    return axios.get(`/api/suggestion/${suggestionId}/comments`)
  }

  public static createSuggestionComment (suggestionId: string | number, comment: string): AxiosPromise {
    return axios.post(`/api/suggestion/${suggestionId}/comment`, { comment })
  }
}
