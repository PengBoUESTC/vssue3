<template>
  <div class="vssue">
    <!-- header -->
    <VssueHeader />

    <!-- body -->
    <VssueBody />
  </div>
</template>

<script lang="ts" setup>
import { provide, watch, onMounted, reactive } from 'vue'
import type { Vssue as VssueNamespace} from '~/types/vssue';
import VssueBody from './components/VssueBody.vue';
import VssueHeader from './components/VssueHeader.vue';
import VssueStore from './VssueStore';

const props = defineProps<{
  title: string | ((opts?: VssueNamespace.Options) => string) | null
  issueId: string | number | null;
  options: Partial<VssueNamespace.Options>;
}>()
const vssue = reactive(new VssueStore())
/**
 * Provide the VssueStore for the child components
 */
provide('vssue', vssue)

/**
 * Set options of Vssue if `options` prop is changed
 */
watch(() => props.options, (options) => {
  vssue.setOptions(options);
})

onMounted(() => {
  // set issue title and issue id
  if (props.title !== null) {
    vssue.title = props.title;
  }
  if (props.issueId !== null) {
    vssue.issueId = props.issueId;
  }

  // set options
  vssue.setOptions(props.options);

  // init vssue
  vssue.init();
})
</script>
