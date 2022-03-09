<template>
<div class="h-header bg-indigo-500 w-full flex justify-between">
<div class="flex flex-col">
  <h2>{{title}}</h2>
  <h4>{{sub-title}}</h4>
</div>
</div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'

export default class HeaderComponent extends Vue {
  @Prop() readonly title!: string;
  @Prop() readonly subTitle!: string;
}
</script>

<style scoped>

</style>
