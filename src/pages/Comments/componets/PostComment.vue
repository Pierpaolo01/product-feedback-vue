<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <!--TODO Profile pic-->
      <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    </div>
    <div class="min-w-0 flex-1">
      <form class="relative" @submit.prevent="handleSubmit">
        <div class="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <label class="sr-only">Add your comment</label>
          <textarea rows="3" v-model="comment" class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm" placeholder="Add your comment..."></textarea>

          <!-- Spacer element to match the height of the toolbar -->
          <div class="py-2" aria-hidden="true">
            <!-- Matches height of button in toolbar (1px border + 36px content height) -->
            <div class="py-px">
              <div class="h-9"></div>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
          <div class="flex-shrink-0">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import CommentsService from '@/services/CommentsService'

@Component
export default class PostComment extends Vue {
  @Prop({ default: () => 'comment' }) readonly mode: 'comment' | 'reply'
  @Prop() readonly commentId: string | number;
  public comment = ''

  public handleSubmit (): void {
    if (this.mode === 'reply') {
      this.submitCommentReply()
      return
    }

    this.submitComment()
  }

  public async submitComment (): Promise<void> {
    try {
      await CommentsService.createSuggestionComment(this.$route.params.suggestion_id, this.comment)
      this.refreshComments()
    } catch (e) {
      console.log({ e })
    }
  }

  public async submitCommentReply (): Promise<void> {
    try {
      await CommentsService.createCommentReply(this.commentId, this.comment)
      this.refreshComments()
    } catch (e) {
      console.log({ e })
    }
  }

  @Emit()
  public refreshComments (): void {
    //
  }
}
</script>
