<template>
  <TransitionFade>
    <!-- initialized -->
    <div v-if="!vssue.isInitializing" class="vssue-body">
      <VssueNewComment v-if="vssue.API" />

      <!-- notice - alert and progress -->
      <VssueNotice />

      <TransitionFade>
        <!-- comments - list and pagination -->
        <VssueComments
          v-if="vssue.comments && vssue.comments.data.length > 0"
        />

        <VssueStatus v-else />
      </TransitionFade>
    </div>

    <VssueStatus v-else />
  </TransitionFade>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import type { Vssue } from '~/types/vssue'

import TransitionFade from './TransitionFade.vue';
import VssueComments from './VssueComments.vue';
import VssueNewComment from './VssueNewComment.vue';
import VssueNotice from './VssueNotice.vue';
import VssueStatus from './VssueStatus.vue';

const vssue = inject<Vssue.Store>('vssue')!
</script>
