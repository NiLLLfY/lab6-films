<template>
  <div id="app">
    <header class="navbar">
      <div class="container">
        <router-link to="/movies" class="logo">Каталог</router-link>
      </div>
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f0f2f5;
  color: #1a1a1a;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
.navbar {
  background: #1f2937;
  padding: 1.2rem 0;
  margin-bottom: 2rem;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
</style>
