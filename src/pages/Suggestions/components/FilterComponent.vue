<template>
  <div class="bg-white p-4 w-full flex flex-wrap justify-between md:rounded-lg md:h-48 md:w-56">
    <div>
      <BadgeComponent text="All" />
    </div>
    <div>
      <BadgeComponent text="UI" />
    </div>
    <div>
      <BadgeComponent text="UX" />
    </div>
    <div>
      <BadgeComponent text="Enhancement" />
    </div>
    <div>
      <BadgeComponent text="Bug" />
    </div>
    <div>
      <BadgeComponent text="Feature" />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BadgeComponent from '@/components/BadgeComponent.vue'
@Component({
  components: { BadgeComponent }
})
export default class FilterComponent extends Vue {}
</script>
