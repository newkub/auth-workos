<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<template>
  <div class="home-container">
    <h1>Welcome to the Dashboard</h1>
    <div v-if="authStore.user">
      <p>Welcome, {{ authStore.user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 20px;
}
</style>