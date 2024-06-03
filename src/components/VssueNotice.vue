<template>
  <div class="vssue-notice">
    <div
      v-show="progress.show"
      class="vssue-progress"
      :style="{
        width: `${progress.percent}%`,
        transition: `all ${progress.speed}ms linear`,
      }"
    />

    <TransitionFade>
      <div
        v-show="alert.show"
        class="vssue-alert"
        @click="alertHide()"
        v-text="alert.message"
      />
    </TransitionFade>
  </div>
</template>

<script lang="ts" setup>
import type { Vssue } from '~/types/vssue'
import { inject, watch, reactive, onBeforeMount, onBeforeUnmount } from 'vue'
import { on, off } from '../event'
import TransitionFade from './TransitionFade';

const vssue = inject<Vssue.Store>('vssue')!

// progress data
const progress: {
  show: boolean;
  percent: number;
  timer: number | null;
  speed: number;
} = reactive({
  show: false,
  percent: 0,
  timer: null,
  speed: 200,
});

// alert data
const alert: {
  show: boolean;
  message: string | null;
  timer: number | null;
} = reactive({
  show: false,
  message: null,
  timer: null,
});

/**
 * Progress start
 */
const progressStart = (): void => {
  progress.show = true;
  progress.percent = 0;
  progress.timer = window.setInterval(() => {
    progress.percent += 5;
    if (progress.percent > 94) {
      if (progress.timer !== null)
        window.clearInterval(progress.timer);
    }
  }, progress.speed);
}

/**
 * Progress stop
 */
const progressDone = (): void => {
  progress.percent = 100;
  if (progress.timer !== null) window.clearTimeout(progress.timer);
  progress.timer = null;
  window.setTimeout(() => {
    progress.show = false;
  }, progress.speed);
}

/**
 * Show progress when loading comments
 */
watch(() => vssue.isLoadingComments, (val: boolean) => {
  if (vssue.comments) {
    if (val) {
      progressStart();
    } else {
      progressDone();
    }
  }
})

/**
 * Hide alert message
 */
const alertHide = (): void => {
  alert.show = false;
  if (alert.timer !== null) window.clearTimeout(alert.timer);
  alert.timer = null;
}

/**
 * Show alert message
 */
const alertShow = (content): void => {
  alert.show = true;
  alert.message = content;
  if (alert.timer !== null) window.clearTimeout(alert.timer);
  alert.timer = window.setTimeout(() => {
    alertHide();
  }, 3000);
}


onBeforeMount(() => {
  on('error', e => alertShow(e.message));
})

onBeforeUnmount(() => {
  off('error');
  if (progress.timer !== null) window.clearTimeout(progress.timer);
  if (alert.timer !== null) window.clearTimeout(alert.timer);
})
</script>
