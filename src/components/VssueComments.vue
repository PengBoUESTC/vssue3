<template>
  <div class="vssue-comments">
    <!-- pagination top -->
    <VssuePagination />

    <!-- list of comments -->
    <TransitionFade group>
      <VssueComment
        v-for="comment in vssue.comments?.data"
        :key="comment.id"
        :comment="comment"
      />
    </TransitionFade>

    <!-- pagination bottom - if too many comments -->
    <VssuePagination v-show="(vssue.comments?.data.length || 0) > 5" />
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue' 
import type { Vssue } from '~/types/vssue'

import TransitionFade from './TransitionFade';
import VssueComment from './VssueComment.vue';
import VssuePagination from './VssuePagination.vue';

const vssue = inject<Vssue.Store>('vssue')!
</script>
