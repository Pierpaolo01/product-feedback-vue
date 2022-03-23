<template>
  <div class="bg-white p-4 w-full flex flex-wrap justify-between md:rounded-lg md:h-48 md:w-56">
    <div @click="filtered('')">
      <BadgeComponent text="All" :active="activeFilter === ''"/>
    </div>
    <div @click="filtered('ui')">
      <BadgeComponent text="UI" :active="activeFilter === 'ui'" />
    </div>
    <div @click="filtered('ux')">
      <BadgeComponent text="UX" :active="activeFilter === 'ux'" />
    </div>
    <div @click="filtered('enhancement')">
      <BadgeComponent text="Enhancement" :active="activeFilter === 'enhancement'"/>
    </div>
    <div @click="filtered('bug')">
      <BadgeComponent text="Bug" :active="activeFilter === 'bug'"  />
    </div>
    <div @click="filtered('feature')">
      <BadgeComponent text="Feature" :active="activeFilter === 'feature'" />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import BadgeComponent from '@/components/BadgeComponent.vue'
@Component({
  components: { BadgeComponent }
})
export default class FilterComponent extends Vue {
  public activeFilter = ''

  @Emit()
  public filtered (filter: string): string {
    console.log(filter)
    this.activeFilter = filter
    return filter
  }
}
</script>
