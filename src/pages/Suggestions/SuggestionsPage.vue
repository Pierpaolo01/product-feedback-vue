<template>
<div>
  <HeaderComponent :title="'FeedbackBoard'" subTitle="Pierpaolo Pascarella"/>
  <SortByBar />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from '@/pages/Suggestions/components/HeaderComponent.vue'
import SortByBar from '@/pages/Suggestions/components/SortByBar.vue'
@Component({
  components: {
    SortByBar,
    HeaderComponent
  }
})
export default class SuggestionsPage extends Vue {}
</script>

<style scoped>

</style>
