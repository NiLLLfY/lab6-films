<template>
  <div class="card">
    <button class="back-btn" @click="$router.push('/movies')">← Назад к списку</button>
    <div class="content">
      <h1 class="movie-title">{{ title }}</h1>
      <p class="description">
        Информационная страница фильма. Здесь представлены основные сведения и описание сюжета.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
}
.back-btn {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #374151;
  cursor: pointer;
  padding: 8px 16px;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
.back-btn:hover {
  background: #e5e7eb;
}
.movie-title {
  margin: 0 0 1rem 0;
  font-size: 2.2rem;
  color: #111827;
}
.description {
  line-height: 1.6;
  color: #374151;
  margin-bottom: 1rem;
}
</style>
