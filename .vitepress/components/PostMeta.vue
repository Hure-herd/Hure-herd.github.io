<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

const hasDate = computed(() => !!frontmatter.value.date)
const date = computed(() => {
  const d = new Date(frontmatter.value.date)
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
})
</script>

<template>
  <div v-if="hasDate" class="post-meta">
    <div class="meta-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      <span class="date-text">{{ date }}</span>
    </div>

    <div v-if="frontmatter.tags" class="meta-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
      <span class="tag-text">{{ frontmatter.tags }}</span>
    </div>
  </div>
</template>

<style scoped>
.post-meta {
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon {
  opacity: 0.8;
}
</style>