import axios, { AxiosPromise } from 'axios'
import { CreateSuggestionForm } from '@/types/createSuggestion'
import { Suggestion } from '@/types/suggestion'

export default class SuggestionService {
  public static getAllSuggestions (category = ''): AxiosPromise<Suggestion[]> {
    return axios.get('api/suggestions', {
      params: { category }
    })
  }

  public static getSuggestion (id: string | number):AxiosPromise<Suggestion> {
    return axios.get(`api/suggestions/${id}`)
  }

  public static createSuggestion (suggestion: CreateSuggestionForm): AxiosPromise<Suggestion> {
    return axios.post('/api/create-suggestion', suggestion)
  }

  public static updateSuggestion (suggestion: Suggestion): AxiosPromise<Suggestion> {
    return axios.patch(`/api/suggestion/${suggestion.id}`, suggestion)
  }

  public static deleteSuggestion (id: number): AxiosPromise<void> {
    return axios.delete(`/api/suggestion/${id}`)
  }
}
