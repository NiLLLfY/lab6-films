<template>
  <div class="card">
    <h1 class="title">Каталог фильмов</h1>
    <div class="movie-grid">
      <router-link
        v-for="movie in movies"
        :key="movie"
        :to="{ name: 'MovieDetail', params: { title: movie } }"
        class="movie-item"
      >
        <span>{{ movie }}</span>
        <span class="arrow">→</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const movies = ref(['Интерстеллар', 'Начало', 'Дюна', 'Темный рыцарь', 'Матрица'])
    return { movies }
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
.title {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  color: #111827;
  border-bottom: 2px solid #1f2937;
  padding-bottom: 10px;
}
.movie-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.movie-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
}
.movie-item:hover {
  background: #f9fafb;
  border-color: #4f46e5;
  color: #4f46e5;
}
.arrow {
  color: #9ca3af;
}
</style>
