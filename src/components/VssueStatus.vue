<template>
  <TransitionFade>
    <div v-if="status" :key="status" class="vssue-status">
      <VssueIcon
        v-if="['failed', 'loadingComments', 'initializing'].includes(status)"
        :name="status === 'failed' ? 'error' : 'loading'"
      />

      <p class="vssue-status-info">
        <Component
          :is="
            ['issueNotCreated', 'loginRequired'].includes(status) ? 'a' : 'span'
          "
          @click="handleClick"
        >
          {{ t(status) }}
        </Component>
      </p>
    </div>
  </TransitionFade>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Vssue } from '~/types/vssue'
import TransitionFade from './TransitionFade';
import VssueIcon from './VssueIcon';

const { t } = useI18n()

const vssue = inject<Vssue.Store>('vssue')!

const status = computed((): string | null => {
  if (vssue.isFailed) {
    return 'failed';
  } else if (vssue.isInitializing) {
    return 'initializing';
  } else if (vssue.isIssueNotCreated && !vssue.isCreatingIssue) {
    if (vssue.isAdmin || !vssue.isLogined) {
      return 'issueNotCreated';
    } else {
      return 'failed';
    }
  } else if (vssue.isLoginRequired) {
    return 'loginRequired';
  } else if (!vssue.comments || vssue.isCreatingIssue) {
    return 'loadingComments';
  } else if (vssue.comments.data.length === 0) {
    return 'noComments';
  } else {
    return null;
  }
})

const handleClick = (): void => {
  if (status.value === 'issueNotCreated') {
    vssue.postIssue();
  } else if (status.value === 'loginRequired') {
    vssue.login();
  }
}
</script>
