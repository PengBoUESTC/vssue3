<template>
  <div class="vssue-pagination">
    <div class="vssue-pagination-per-page">
      <label>
        <select
          v-model="perPage"
          class="vssue-pagination-select"
          :disabled="disabled"
        >
          <option v-for="val in perPageOptions" :key="val" :value="val">
            {{ val }}
          </option>
        </select>

        <span>
          {{ t('perPage') }}
        </span>
      </label>

      <span
        v-if="vssue.API?.platform.meta.sortable"
        :class="{
          'vssue-pagination-link': true,
          disabled: disabled,
        }"
        :title="t('sort')"
        @click="vssue.query.sort = vssue.query.sort === 'asc' ? 'desc' : 'asc'"
      >
        {{ vssue.query.sort === 'asc' ? `↑` : `↓` }}
      </span>
    </div>

    <div class="vssue-pagination-page">
      <span
        :class="{
          'vssue-pagination-link': true,
          disabled: page === 1 || disabled,
        }"
        :title="t('prev')"
        @click="page -= 1"
        v-text="`<`"
      />

      <label>
        <span>
          {{ t('page') }}
        </span>

        <select
          v-show="pageCount > 1"
          v-model="page"
          class="vssue-pagination-select"
          :disabled="disabled"
        >
          <option v-for="val in pageCount" :key="val" :value="val">
            {{ val }}
          </option>
        </select>

        <span v-show="pageCount < 2" v-text="page" />

        <span v-text="` / ${pageCount} `" />
      </label>

      <span
        :class="{
          'vssue-pagination-link': true,
          disabled: page === pageCount || disabled,
        }"
        :title="t('next')"
        @click="page += 1"
        v-text="`>`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue' 
import { useI18n } from 'vue-i18n'
import type { Vssue } from '~/types/vssue'

const { t } = useI18n()

const vssue = inject<Vssue.Store>('vssue')!

const disabled = computed((): boolean => {
  return vssue.isPending;
})

const pageCount = computed((): number => {
  const pageCount = Math.ceil(
    vssue.comments!.count / vssue.comments!.perPage
  );
  return pageCount > 1 ? pageCount : 1;
})

const perPageOptions = computed((): Array<number> => {
  const perPageOptions: Array<number> = [5, 10, 20, 50];
  if (
    !perPageOptions.includes(vssue.options!.perPage) &&
    vssue.options!.perPage < 100
  ) {
    perPageOptions.push(vssue.options!.perPage);
  }
  return perPageOptions.sort((a, b) => a - b);
})

const page = computed({
  get: (): number => {
    return vssue.query.page > pageCount.value
      ? pageCount.value
      : vssue.query.page;
  },
  set: (val: number) => {
    if (val > 0 && val <= pageCount.value) {
      vssue.query.page = val;
    }
  }
})

const perPage = computed({
  get: (): number => {
    return vssue.query.perPage;
  },
  set: (val: number) => {
    if (perPageOptions.value.includes(val)) {
      vssue.query.perPage = val;
    }
  }
})
</script>
