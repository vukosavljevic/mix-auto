<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1><span class="highlight">{{ title }}</span></h1>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
    </section>

    <section class="content">
      <div class="container legal-body">
        <slot />
        <p class="updated">Zadnja izmjena: {{ LEGAL_UPDATED }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { LEGAL_UPDATED } from '../lib/company'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})

onMounted(() => {
  document.title = `${props.title} | MIX AUTO`
})
</script>

<style scoped>
.legal-page {
  padding-top: 100px;
  background: #0a0a0a;
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.8);
}

.container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 3rem;
}

.page-hero {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  margin-top: 1rem;
  padding: 4rem 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
}

.highlight {
  color: #FFB800;
}

.content {
  padding: 3rem 0 5rem;
}

.legal-body {
  line-height: 1.75;
  font-size: 1.02rem;
}

.legal-body :deep(h2) {
  color: white;
  font-size: 1.35rem;
  margin: 2.25rem 0 0.75rem;
}

.legal-body :deep(h2:first-child) {
  margin-top: 0;
}

.legal-body :deep(p),
.legal-body :deep(ul) {
  margin: 0 0 1rem;
}

.legal-body :deep(ul) {
  padding-left: 1.25rem;
}

.legal-body :deep(li) {
  margin-bottom: 0.4rem;
}

.legal-body :deep(a) {
  color: #FFB800;
  text-decoration: none;
}

.legal-body :deep(a:hover) {
  text-decoration: underline;
}

.legal-body :deep(strong) {
  color: white;
}

.legal-body :deep(dl) {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.6rem 1.5rem;
  margin: 0 0 1.5rem;
  padding: 1.5rem;
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.legal-body :deep(dt) {
  color: rgba(255, 255, 255, 0.5);
}

.legal-body :deep(dd) {
  margin: 0;
  color: white;
  overflow-wrap: anywhere;
}

.updated {
  margin-top: 3rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.45);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .page-hero h1 {
    font-size: 2.25rem;
  }

  .legal-body :deep(dl) {
    grid-template-columns: 1fr;
    gap: 0.15rem;
    padding: 1.1rem;
  }

  .legal-body :deep(dd) {
    margin-bottom: 0.6rem;
  }
}
</style>
