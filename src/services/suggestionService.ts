import axios, { AxiosPromise } from 'axios'
import { CreateSuggestionForm } from '@/types/createSuggestion'

export default class SuggestionService {
  public static createSuggestion (suggestion: CreateSuggestionForm): AxiosPromise {
    return axios.post('/api/create-suggestion', suggestion)
  }
}
