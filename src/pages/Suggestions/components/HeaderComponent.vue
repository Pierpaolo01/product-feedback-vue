<template>
<div class="bg-indigo-500 p-4  w-full flex justify-between md:rounded-lg md:h-48 md:w-56">
  <div class="flex flex-col justify-start text-left text-sm text-white md:justify-end">
    <h2 class="font-bold text-2xl">{{title}}</h2>
    <h4 class="text-lg">{{subTitle}}</h4>
  </div>
  <div class="self-center md:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white">
      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
    </svg>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class HeaderComponent extends Vue {
  @Prop() readonly title!: string;
  @Prop() readonly subTitle!: string;
}
</script>

<style scoped>

</style>
