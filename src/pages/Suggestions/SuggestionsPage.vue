<template>
<div class="md:p-8 md:space-y-6 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-between max-w-7xl mx-auto">
  <div class="md:pb-2 flex justify-between lg:block lg:space-y-6 lg:max-h-screen">
    <HeaderComponent :title="'Feedback Board'" subTitle="Pierpaolo Pascarella"/>
    <FilterComponent class="hidden md:flex" />
    <RoadmapComponent class="hidden md:block"/>
  </div>
  <div class="space-y-6 flex-1">
    <SortByBar />
    <div class="p-8 md:p-0 space-y-6">
      <SuggestionItem v-for="suggestion in suggestions" :key="suggestion.id" :suggestion="suggestion"/>
    </div>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from '@/pages/Suggestions/components/HeaderComponent.vue'
import SortByBar from '@/pages/Suggestions/components/SortByBar.vue'

import SuggestionItem from '@/pages/Suggestions/components/SuggestionItem.vue'
import FilterComponent from '@/pages/Suggestions/components/FilterComponent.vue'
import RoadmapComponent from '@/pages/Suggestions/components/RoadmapComponent.vue'
import SuggestionService from '@/services/suggestionService'
import { Suggestion } from '@/types/suggestion'
@Component({
  components: {
    RoadmapComponent,
    FilterComponent,
    SuggestionItem,
    SortByBar,
    HeaderComponent
  }
})
export default class SuggestionsPage extends Vue {
  public suggestions: Suggestion[] | null = null;

  public created (): void {
    this.fetchAllSuggestions()
  }

  public async fetchAllSuggestions (): Promise<void> {
    try {
      const response = await SuggestionService.getAllSuggestions()
      this.suggestions = response.data
    } catch (err) {}
  }
}
</script>

<style scoped>

</style>
