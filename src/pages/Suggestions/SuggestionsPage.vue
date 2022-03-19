<template>
<div>
  <HeaderComponent :title="'FeedbackBoard'" subTitle="Pierpaolo Pascarella"/>
  <SortByBar />
  <div class="p-8">
    <SuggestionItem />
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from '@/pages/Suggestions/components/HeaderComponent.vue'
import SortByBar from '@/pages/Suggestions/components/SortByBar.vue'
import SuggestionItem from '@/pages/Suggestions/components/SuggestionItem.vue'
@Component({
  components: {
    SuggestionItem,
    SortByBar,
    HeaderComponent
  }
})
export default class SuggestionsPage extends Vue {}
</script>

<style scoped>

</style>
