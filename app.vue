<template>
  <div class="container">
    <h1 class="title">Nuxt 3 User API</h1>
    <p class="subtitle">Explore our DDD-style endpoints</p>
    <div class="endpoint-list">
      <div class="endpoint">
        <span class="method get">GET</span>
        <span class="path">/api/user/[id]</span>
        <span class="description">Retrieve a user by ID</span>
      </div>
      <div class="endpoint">
        <span class="method post">POST</span>
        <span class="path">/api/user/create</span>
        <span class="description">Create a new user</span>
      </div>
    </div>

    <div class="button-container">
      <button @click="createUser" class="btn create">Create User</button>
      <button @click="getUser" class="btn get">Get User</button>
    </div>

    <div v-if="result" class="result-container">
      <h2 class="result-title">Result:</h2>
      <pre class="result-content">{{ JSON.stringify(result, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const result = ref(null)

async function createUser() {
  const userData = {
    id: Math.floor(Math.random() * 1000).toString(),
    name: 'John Doe',
    email: 'john@example.com'
  }

  try {
    const response = await fetch('/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    result.value = await response.json()
  } catch (error) {
    result.value = { error: error.message }
  }
}

async function getUser() {
  const userId = prompt('Enter user ID:')
  if (!userId) return

  try {
    const response = await fetch(`/api/user/${userId}`)
    result.value = await response.json()
  } catch (error) {
    result.value = { error: error.message }
  }
}
</script>

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #3498db;
  --background-color: #ecf0f1;
  --text-color: #2c3e50;
  --card-background: #ffffff;
  --border-radius: 4px;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}

.endpoint-list {
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.endpoint {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.endpoint:last-child {
  border-bottom: none;
}

.method {
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: var(--border-radius);
  margin-right: 0.8rem;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.get { background-color: #e1f5fe; color: #0288d1; }
.post { background-color: #e8f5e9; color: #388e3c; }

.path {
  font-family: 'Fira Code', monospace;
  margin-right: 0.8rem;
  color: var(--secondary-color);
}

.description {
  color: var(--secondary-color);
  font-style: italic;
  font-size: 0.9rem;
}

.button-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

.btn:hover {
  opacity: 0.9;
}

.btn.create {
  background-color: var(--accent-color);
  color: #ffffff;
}

.btn.get {
  background-color: var(--primary-color);
  color: #ffffff;
}

.result-container {
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.result-title {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.result-content {
  background-color: #f7f9fa;
  padding: 1rem;
  border-radius: var(--border-radius);
  font-family: 'Fira Code', monospace;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--secondary-color);
  font-size: 0.9rem;
}
</style>