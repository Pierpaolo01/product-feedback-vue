<template>
  <div class="flex items-center mx-auto max-w-xl h-full" v-if="suggestion">
    <form class="p-6 relative space-y-6 w-full bg-white rounded-lg" @submit.prevent="updateSuggestion">
      <div class="p-2 absolute bg-my-meteorite rounded-full -top-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>
      <div>
        <label for="title" class="block text-sm font-medium text-left text-gray-700">Title</label>
        <div class="mt-1">
          <input v-model="suggestion.title" type="text" id="title" class="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="We want dark mode!">
        </div>
      </div>

      <div>
        <label for="category" class="block text-sm font-medium text-left text-gray-700">Category</label>
        <div class="mt-1">
          <select id="category" v-model="suggestion.category" class="block py-2 pr-10 pl-3 mt-1 w-full text-base rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Feature</option>
            <option selected>Enhancement</option>
            <option>UI</option>
            <option>UX</option>
            <option>Bug</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-left text-gray-700">Description</label>
        <div class="mt-1">
          <textarea v-model="suggestion.description" class="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Because it looks cool! Sheesh" />
        </div>
      </div>
      <div class="flex justify-between">
        <button type="button" class="p-2 text-white text-white self-start rounded-lg bg-red-600" @click="deleteSuggestion">DELETE</button>
        <div>
          <router-link :to="{name: 'suggestions-page'}" class="p-2 mr-4 text-white rounded-lg bg-my-meteorite">Cancel</router-link>
          <button type="submit" class="p-2 text-white rounded-lg bg-my-blue">Upadte suggestion</button>
        </div>

      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import SuggestionService from '@/services/suggestionService'
import { Suggestion } from '@/types/suggestion'
@Component({
  components: { MyButton }
})
export default class UpdateSuggestion extends Vue {
  public suggestion: Suggestion | null = null;

  public async created (): Promise<void> {
    try {
      const response = await SuggestionService.getSuggestion(this.$route.params.suggestion_id)
      this.suggestion = response.data
    } finally {
    }
  }

  public async updateSuggestion (): Promise<void> {
    if (!this.suggestion) return
    try {
      await SuggestionService.updateSuggestion(this.suggestion)

      this.$notify({
        type: 'success',
        text: 'Successfully updated suggestion'
      })
      await this.$router.push({ name: 'suggestions-page' })
    } catch (err) {}
  }

  public async deleteSuggestion (): Promise<void> {
    if (!this.suggestion) return

    try {
      await SuggestionService.deleteSuggestion(this.suggestion?.id)
      await this.$router.push({ name: 'suggestions-page' })
    } finally {
    }
  }
}
</script>
