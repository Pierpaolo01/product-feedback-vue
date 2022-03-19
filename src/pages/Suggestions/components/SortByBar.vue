<template>
<div class="py-4 px-6 bg-my-meteorite md:rounded-lg">
  <div class="flex justify-between items-center">
    <!--TODO total suggestions on bigger screens-->
    <span class="text-white text-lg">
      sort by :
      <span class="font-bold">TODO</span>
    </span>

    <MyButton text="+ Add Feedback" class="bg-my-blue text-white font-bold"/>

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
