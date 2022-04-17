<template>
  <div class="space-y-4">
    <div class="p-4 border border-gray-300 rounded-lg shadow-sm overflow-hidden"  >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img class="mr-6 h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          <div>
            <span>{{commentObject.user.name}}</span>
            <span> {{commentObject.user.email}} </span>
          </div>
        </div>
        <div>
          <button class="text-blue-400 underline items-end mr-6" @click="showReplies = !showReplies">reply</button>
          <button v-if="authenticatedUser.id === commentObject.user.id || $can('DELETE_ANY_COMMENT')" @click="deleteComment(commentObject)" class="text-red-400">DELETE</button>
        </div>
      </div>
      <p class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm">
        {{ commentObject.comment || commentObject.reply }}
      </p>
    </div>
    <div v-if="showReplies" class="space-y-4 p-4 bg-gray-100 rounded-md">
      <div v-for="reply in replies" :key="reply.id">
        <ViewComments :comment-object="reply"/>
      </div>
      <PostComment mode="reply" :comment-id="commentObject.id" @refresh-comments="getReplies"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'
import AuthStore from '@/store/modules/AuthStore'
import CommentsService from '@/services/CommentsService'
import Comment from '@/types/comment'
import PostComment from '@/pages/Comments/componets/PostComment.vue'

@Component({ components: { PostComment } })
export default class ViewComments extends Vue {
  @Prop() readonly commentObject!: Comment;

  public authenticatedUser = AuthStore.getAuthenticatedUser;

  public replies: Comment[] = [];

  public showReplies = false;

  public created (): void {
    this.getReplies()
  }

  public async getReplies (): Promise<void> {
    try {
      const response = await CommentsService.getAllCommentReplies(this.commentObject.id)
      this.replies = response.data.data
    } finally {
      //
    }
  }

  public async submitReply (): Promise<void> {
    //
  }

  public async deleteComment ({ id }) {
    try {
      await CommentsService.deleteComment(this.$route.params.suggestion_id, id)
      this.refreshComments()
    } finally {

    }
  }

  @Emit()
  public refreshComments (): void {
    //
  }
}
</script>
