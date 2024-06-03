<template>
  <div class="vssue-new-comment">
    <div class="vssue-comment-avatar">
      <a
        v-if="user"
        :href="user.homepage"
        :title="user.username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="user.avatar" :alt="user.username" />
      </a>

      <VssueIcon
        v-else
        :name="platform?.toLowerCase() || ''"
        :title="t('loginToComment', { platform })"
        @click="vssue.login()"
      />
    </div>
    <!-- .vssue-new-comment-avatar -->

    <div class="vssue-new-comment-body">
      <textarea
        ref="input"
        v-model="content"
        class="vssue-new-comment-input"
        :rows="inputRows"
        :disabled="isInputDisabled"
        :placeholder="t(user ? 'placeholder' : 'noLoginPlaceHolder')"
        :spellcheck="false"
        aria-label="leave a comment"
        @keyup.enter.ctrl="submit()"
      />
    </div>
    <!-- .vssue-new-comment-body -->

    <div class="vssue-new-comment-footer">
      <span v-if="user" class="vssue-current-user">
        <span>{{ t('currentUser') }} - {{ user.username }} - </span>

        <a class="vssue-logout" @click="vssue.logout()">
          {{ t('logout') }}
        </a>
      </span>

      <span v-else class="vssue-current-user">
        {{ t('loginToComment', { platform }) }}
      </span>

      <div class="vssue-new-comment-operations">
        <VssueButton
          v-if="user"
          class="vssue-button-submit-comment"
          type="primary"
          :disabled="isSubmitDisabled"
          @click="submit()"
        >
          <VssueIcon v-show="loading" name="loading" />

          {{ t(loading ? 'submitting' : 'submitComment') }}
        </VssueButton>

        <VssueButton
          v-else
          class="vssue-button-login"
          type="primary"
          :title="t('loginToComment', { platform })"
          @click="vssue.login()"
        >
          {{ t('login', { platform }) }}
        </VssueButton>
      </div>
    </div>
    <!-- .vssue-new-comment-footer -->
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, computed, onBeforeMount, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import type { VssueAPI } from '~/types/api'
import type { Vssue } from '~/types/vssue'
import { on, off } from '../event'
import VssueButton from './VssueButton';
import VssueIcon from './VssueIcon';

const { t } = useI18n()

const vssue = inject<Vssue.Store>('vssue')!

const input = ref<HTMLInputElement>()
const content = ref('');

const user = computed((): VssueAPI.User | null => {
  return vssue.user;
})

const platform = computed((): string | null => {
  return vssue.API && vssue.API.platform.name;
})

const loading = computed((): boolean => {
  return vssue.isCreatingComment;
})

const isInputDisabled = computed((): boolean => {
  return loading.value || user.value === null || vssue.issue === null;
})

const isSubmitDisabled = computed((): boolean => {
  return (
    content.value === '' || vssue.isPending || vssue.issue === null
  );
})

const contentRows = computed((): number => {
  return content.value.split('\n').length - 1;
})

const inputRows = computed((): number => {
  return contentRows.value < 3 ? 5 : contentRows.value + 2;
})

const focus = () => {
  input.value?.focus();
}

onBeforeMount(() => {
  on('reply-comment', comment => {
    const quotedComment = comment.contentRaw.replace(/\n/g, '\n> ');
    const replyContent = `@${comment.author.username}\n\n> ${quotedComment}\n\n`;
    content.value = content.value.concat(replyContent);
    focus();
  });
})

onBeforeUnmount(() => {
  off('reply-comment');
})

const submit = async (): Promise<void> => {
  if (isSubmitDisabled.value) return;
  await vssue.postComment({ content: content.value });
  content.value = '';
  await vssue.getComments();
}
</script>
