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
import axios from 'axios'
@Component({
  components: {
    SortByBar,
    HeaderComponent
  }
})
export default class SuggestionsPage extends Vue {
  public created (): void {
    setTimeout(() => {
      axios.get('http://localhost:5001/api/protected-content')
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data)
          }
        })
    }, 2000)
  }
}
</script>

<style scoped>

</style>
