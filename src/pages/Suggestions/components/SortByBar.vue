<template>
<div class="py-4 px-6 bg-my-meteorite md:rounded-lg">
  <div class="flex justify-between items-center">
    <div class="flex">
      <div class="hidden lg:flex text-white mr-9">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
        <h1 class="font-bold text-xl ">
          {{suggestionsCount}} Suggestions
        </h1>
      </div>
        <span class="text-white text-lg">
          sort by : <span class="font-bold">TODO</span>
      </span>
    </div>
    <router-link :to="{name: 'create-suggestion'}">
      <MyButton text="+ Add Feedback" class="bg-my-blue text-white font-bold"/>
    </router-link>

  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
@Component({
  components: { MyButton }
})
export default class sortByBar extends Vue {
  @Prop() readonly suggestionsCount!: number;
}
</script>

<style scoped>

</style>
