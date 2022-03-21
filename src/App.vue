<template>
  <div id="app" class="h-full bg-light-gray">
    <router-view/>
    <notifications
      width="448px"
      :duration="2000"
      position="bottom right"
    >
      <template
        slot="body"
        slot-scope="props"
      >
        <div
          class="text-white rounded p-4 flex mb-8 mr-8 items-center justify-between"
          :class="props.item.type === 'error'? 'bg-red-500' : 'bg-green-500'"
        >
          <div class="flex items-center">
            <svg
              v-if="props.item.type === 'error'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 mr-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 mr-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div class="text-white flex flex-col ">
              <span class="text-white uppercase font-bold"> {{ props.item.title }} </span>
              <span class="text-white text-md"> {{ props.item.text }} </span>
            </div>
          </div>
        </div>
      </template>
    </notifications>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
