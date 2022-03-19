<template>
<div class="grid grid-cols-2 p-4 bg-white rounded-lg">
  <div class="col-span-2 flex flex-col items-start space-y-2">
    <h1 class="font-bold text-lg mb-2">TITLE</h1>
    <p>DESCRIPTION</p>
    <span class="inline-flex items-center px-2.5 py-1.5 font-bold text-my-blue rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
      CATEGORY
    </span>
  </div>
  <div class="col-span-1 mt-4 flex justify-self-start">
      <span class="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      <span class="text-black font-bold">LIKES</span>
    </span>
  </div>
  <div class="col-span-1 mt-4 flex justify-self-end">
    <span class="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      COMMENTS
    </span>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class SuggestionItem extends Vue {

}
</script>

<style scoped>

</style>
