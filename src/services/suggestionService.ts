import axios, { AxiosPromise } from 'axios'
import { CreateSuggestionForm } from '@/types/createSuggestion'
import { Suggestion } from '@/types/suggestion'

export default class SuggestionService {
  public static getAllSuggestions (): AxiosPromise<Suggestion[]> {
    return axios.get('api/suggestions')
  }

  public static getSuggestion (id: string | number):AxiosPromise<Suggestion> {
    return axios.get(`api/suggestions/${id}`)
  }

  public static createSuggestion (suggestion: CreateSuggestionForm): AxiosPromise {
    return axios.post('/api/create-suggestion', suggestion)
  }

  public static updateSuggestion (suggestion: Suggestion): AxiosPromise {
    return axios.patch(`/api/suggestion/${suggestion.id}`, suggestion)
  }
}
