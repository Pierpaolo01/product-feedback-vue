<template>
  <button class="rounded-lg " :class="{color, size}">
    {{text}}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class MyButton extends Vue {
  @Prop() readonly text!: string;
  @Prop() readonly color!: string;
  @Prop({ default: () => 'normal' }) readonly size!: 'small' | 'normal' | 'large';
}
</script>

<style scoped>

.normal {
  @apply py-4 px-8
}

</style>
