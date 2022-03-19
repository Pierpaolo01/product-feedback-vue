<template>
  <div class="bg-white p-4 w-full md:rounded-lg md:h-48 md:w-52">
    <div class="flex justify-between pb-8">
      <h1 class="font-bold text-lg">
        Roadmap
      </h1>
      <router-link class="underline text-my-blue" :to="{name: 'roadmap'}">
        View
      </router-link>
    </div>
    <ul class="">
      <li class="marker:text-my-blue flex justify-between items-center">
        <div class="flex items-center">
          <div class="h-2 w-2 rounded-full bg-pink-600 mr-4" />
          <span class="text-gray-500 font-bold">Planned</span>
        </div>
        <span class="text-gray-500 font-bold text-lg">2</span>
      </li>
      <li class="marker:text-my-blue flex justify-between items-center">
        <div class="flex items-center">
          <div class="h-2 w-2 rounded-full bg-blue-600 mr-4" />
          <span class="text-gray-500 font-bold">In-Progress</span>
        </div>
        <span class="text-gray-500 font-bold text-lg">3</span>
      </li>
      <li class="marker:text-my-blue flex justify-between items-center">
        <div class="flex items-center">
          <div class="h-2 w-2 rounded-full bg-purple-600 mr-4" />
          <span class="text-gray-500 font-bold">Live</span>
        </div>
        <span class="text-gray-500 font-bold text-lg">1</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class RoadmapComponent extends Vue {}
</script>
