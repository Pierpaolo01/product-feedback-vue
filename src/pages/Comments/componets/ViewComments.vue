<template>
      <div class="p-4 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img class="mr-6 h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <div>
              <span>{{commentObject.user.name}}</span>
              <span> {{commentObject.user.email}} </span>
            </div>
          </div>
          <div>
            <button class="text-blue-400 underline items-end mr-6">reply</button>
            <button v-if="authenticatedUser.id === commentObject.user.id" class="text-red-400">DELETE</button>
          </div>
        </div>
          <p class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm">
            {{ commentObject.comment }}
          </p>
        <div class="float-left">
          replies
        </div>
      </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import AuthStore from '@/store/modules/AuthStore'

@Component
export default class ViewComments extends Vue {
  @Prop() readonly commentObject!: any;

  public authenticatedUser = AuthStore.getAuthenticatedUser;

  public async submitReply (): Promise<void> {
    //
  }

  @Emit()
  public refreshComments (): void {
    //
  }
}
</script>
