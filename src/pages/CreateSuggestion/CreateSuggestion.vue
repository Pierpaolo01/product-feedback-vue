<template>
  <div class="flex items-center mx-auto max-w-xl h-full">
    <form class="p-6 relative space-y-6 w-full bg-white rounded-lg" @submit.prevent="submitSuggestion">
      <div class="p-2 absolute bg-my-meteorite rounded-full -top-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div>
        <label for="title" class="block text-sm font-medium text-left text-gray-700">Title</label>
        <div class="mt-1">
          <input v-model="createSuggestionForm.title" type="text" id="title" class="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="We want dark mode!">
        </div>
      </div>

      <div>
        <label for="category" class="block text-sm font-medium text-left text-gray-700">Category</label>
        <div class="mt-1">
          <select id="category" v-model="createSuggestionForm.category" class="block py-2 pr-10 pl-3 mt-1 w-full text-base rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
          <textarea v-model="createSuggestionForm.description" class="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Because it looks cool! Sheesh" />
        </div>
      </div>
      <div class="flex justify-end">
        <router-link :to="{name: 'suggestions-page'}" class="p-2 mr-4 text-white rounded-lg bg-my-meteorite">Cancel</router-link>
        <button class="p-2 text-white rounded-lg bg-my-blue">Create suggestion</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import { CreateSuggestionForm } from '@/types/createSuggestion'
import SuggestionService from '@/services/suggestionService'
@Component({
  components: { MyButton }
})
export default class CreateSuggestion extends Vue {
  public createSuggestionForm: CreateSuggestionForm = {
    title: '',
    category: '',
    description: ''
  }

  public async submitSuggestion (): Promise<void> {
    try {
      await SuggestionService.createSuggestion(this.createSuggestionForm)

      this.$notify({
        type: 'success',
        text: 'Successfully added suggestion'
      })
      await this.$router.push({ name: 'suggestions-page' })
    } catch (err) {}
  }
}
</script>
