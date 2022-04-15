<template>
  <div class="md:p-8 space-y-6 max-w-2xl mx-auto" v-if="suggestion">
    <header class="w-full flex justify-between items-center">
      <router-link :to="{name: 'suggestions-page'}" class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Go back
      </router-link>
      <router-link v-if="$can('UPDATE_ANY_SUGGESTION', suggestion.userId)" :to="{name: 'update-suggestion', params: {suggestion_id: suggestion.id }}">
        <MyButton  text="Edit suggestion" size="bg-my-blue text-white font-bold normal" />
      </router-link>
    </header>
    <SuggestionItem :suggestion="suggestion"/>
    <PostComment @refresh-comments="getComments" />
    <div class="bg-white p-4 rounded-md space-y-4">
      <ViewComment v-for="comment in suggestionComments" :key="comment.id" :comment-object="comment" @refresh-comments="getComments" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import SuggestionItem from '@/components/SuggestionItem.vue'
import { Suggestion } from '@/types/suggestion'
import { AuthenticatedUser } from '@/types/authenticatedUser'
import SuggestionService from '@/services/suggestionService'
import PostComment from '@/pages/Comments/componets/PostComment.vue'
import CommentsService from '@/services/CommentsService'
import ViewComment from '@/pages/Comments/componets/ViewComments.vue'
import { namespace } from 'vuex-class'

const authStore = namespace('authStore')
@Component({
  components: { PostComment, SuggestionItem, MyButton, ViewComment }
})
export default class CommentsPage extends Vue {
  public suggestionComments = [];

  public suggestion: Suggestion | null = null

  @authStore.Getter
  public getAuthenticatedUser: AuthenticatedUser;

  public created (): void {
    this.getSuggestion()
    this.getComments()
  }

  public async getSuggestion (): Promise<void> {
    try {
      const response = await SuggestionService.getSuggestion(this.$route.params.suggestion_id)
      this.suggestion = response.data.data
    } catch (e) {
      console.log(e)
    }
  }

  public async getComments (): Promise<void> {
    try {
      const response = await CommentsService.getAllSuggestionComments(this.$route.params.suggestion_id)
      this.suggestionComments = response.data.data
    } catch (e) {
      console.log({ e })
    }
  }
}
</script>
