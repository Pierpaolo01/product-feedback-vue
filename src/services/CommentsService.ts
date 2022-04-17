import axios, { AxiosPromise } from 'axios'
import { ApiResponse } from '@/types/apiResponse'
import { Comment } from '@/types/Comment'

export default class CommentService {
  public static getAllSuggestionComments (suggestionId: string | number): AxiosPromise<ApiResponse<Comment[]>> {
    return axios.get(`/api/suggestion/${suggestionId}/comments`)
  }

  public static createSuggestionComment (suggestionId: string | number, comment: string): AxiosPromise<ApiResponse<Comment>> {
    return axios.post(`/api/suggestion/${suggestionId}/comment`, { comment })
  }

  public static deleteComment (suggestionId: string | number, commentId: string | number):AxiosPromise {
    return axios.delete(`/api/suggestion/${suggestionId}/comment/${commentId}`)
  }

  public static getAllCommentReplies (commentId: string | number): AxiosPromise<ApiResponse<Comment[]>> {
    return axios.get(`/api/comment/${commentId}/replies`)
  }

  public static createCommentReply (commentId: string | number, reply: string): AxiosPromise<ApiResponse<Comment>> {
    return axios.post(`/api/comment/${commentId}/replies`, { reply })
  }

  public static deleteReply (replyId: string | number): AxiosPromise {
    return axios.delete(`/api/comment/reply/${replyId}`)
  }
}
