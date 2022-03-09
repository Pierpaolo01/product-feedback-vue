<template>
<div class="py-2 px-6 bg-my-meteorite">
  <div>
    <!--TODO total suggestions on bigger screens-->
    <span class="text-white">
      sort by : <span class="font-bold">OPTION</span>
    </span>

    <MyButton text="+ Add Feedback" color="bg-my-blue"/>
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

}
</script>

<style scoped>

</style>
