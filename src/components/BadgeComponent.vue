<template>
  <span class="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium cursor-pointer" :class="active? 'bg-blue-500 text-white' : 'bg-indigo-100 text-indigo-800 '">
      {{ text }}
      <slot v-if="!text"></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class BadgeComponent extends Vue {
  @Prop({ default: () => '' }) readonly text!: string
  @Prop() readonly active!: boolean
}
</script>
