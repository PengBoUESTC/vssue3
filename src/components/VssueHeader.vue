<template>
  <div class="vssue-header">
    <!-- comments-count - link to issue -->
    <a
      class="vssue-header-comments-count"
      :href="vssue.issue ? vssue.issue.link : undefined"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        {{
          vssue.comments
            ? t('comments', vssue.comments.count, {
                count: vssue.comments.count,
              })
            : t('comments', 0)
        }}
      </span>
    </a>

    <!-- powered-by - platform and vssue -->
    <span class="vssue-header-powered-by">
      <span>Powered by</span>

      <span v-if="vssue.API">
        <a
          :href="vssue.API.platform.link"
          :title="
            `${vssue.API.platform.name} API ${vssue.API.platform.version}`
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ vssue.API.platform.name }}
        </a>

        <span>&</span>
      </span>

      <a
        href="https://github.com/meteorlxy/vssue"
        :title="`Vssue v${vssue.version}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vssue
      </a>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Vssue } from '~/types/vssue'
const { t } = useI18n()

const vssue = inject<Vssue.Store>('vssue')!

</script>
