<script setup>
import { data as posts } from '../theme/posts.data.mts'
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.url" class="post-item">
      <a :href="post.url">
        <h3 class="title">{{ post.frontmatter.title || post.url }}</h3>
        <div class="meta">
          <span v-if="post.frontmatter.date">📅 {{ post.frontmatter.date.substring(0, 10) }}</span>
          <span v-if="post.frontmatter.tags">🏷️ {{ post.frontmatter.tags }}</span>
        </div>
        <div v-if="post.excerpt" class="excerpt" v-html="post.excerpt"></div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}
.post-item {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-bottom: 20px;
  padding: 20px;
  transition: all 0.3s;
}
.post-item a {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: inherit;
}
.post-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
}
.post-item:hover .title {
  color: var(--vp-c-brand);
}
.title {
  margin-top: 0 !important;
  padding-top: 0 !important;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}
.meta {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}
.excerpt {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}
</style>