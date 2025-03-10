<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const clientId = import.meta.env.VITE_WORKOS_CLIENT_ID;

const login = () => {
  const redirectUri = `${window.location.origin}/callback`;
  const state = crypto.randomUUID();
  
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    state,
    response_type: 'code',
    // Add organization_id if you have one
    // organization_id: 'org_123',
  });

  const authorizationUrl = `https://api.workos.com/sso/authorize?${params.toString()}`;
  window.location.href = authorizationUrl;
};
</script>

<template>
  <div class="login-container">
    <h1>Welcome</h1>
    <button @click="login">Sign in with WorkOS</button>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

button {
  margin-top: 20px;
}
</style>