<template>
<div>
  <HeaderComponent title="FeedbackBoard" sub-title="Pierpaolo Pascarella"/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from '@/pages/Suggestions/components/HeaderComponent.vue'
@Component({
  components: {
    HeaderComponent
  }
})
export default class SuggestionsPage extends Vue {}
</script>

<style scoped>

</style>
