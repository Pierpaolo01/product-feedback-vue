<template>
  <div class="max-w-xl mx-auto flex items-center h-full">
    <form class="bg-white rounded-lg space-y-6 p-6 w-full" @submit.prevent="">
      <div>
        <label for="title" class="block text-sm text-left font-medium text-gray-700">Title</label>
        <div class="mt-1">
          <input type="text" id="title" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="We want dark mode!">
        </div>
      </div>

      <div>
        <label for="category" class="block text-sm text-left font-medium text-gray-700">Category</label>
        <div class="mt-1">
          <select id="category" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Feature</option>
            <option selected>Enhancement</option>
            <option>UI</option>
            <option>UX</option>
            <option>Bug</option>
          </select>
        </div>
      </div>

      <div>
        <label for="desc" class="block text-sm text-left font-medium text-gray-700">Title</label>
        <div class="mt-1">
          <textarea type="text" id="desc" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Because it looks cool! Sheesh" />
        </div>
      </div>
      <div class="flex justify-end">
        <button class="bg-my-meteorite rounded-lg text-white p-2 mr-4  ">Cancel</button>
        <button class="bg-my-blue rounded-lg text-white p-2">Create suggestion</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
@Component({
  components: { MyButton }
})
export default class CreateSuggestion extends Vue {}
</script>
