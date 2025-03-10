<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const clientId = import.meta.env.VITE_WORKOS_CLIENT_ID;
const apiKey = import.meta.env.VITE_WORKOS_API_KEY;

onMounted(async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  
  if (code) {
    try {
      const response = await fetch('https://api.workos.com/sso/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: apiKey,
          grant_type: 'authorization_code',
          code,
        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const data = await response.json();
      
      // Get the profile information
      const profileResponse = await fetch('https://api.workos.com/sso/profile', {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      });

      if (!profileResponse.ok) {
        throw new Error('Failed to fetch profile');
      }

      const profileData = await profileResponse.json();
      
      authStore.setUser(profileData.profile);
      router.push('/');
    } catch (error) {
      console.error('Authentication error:', error);
      router.push('/login');
    }
  } else {
    router.push('/login');
  }
});
</script>

<template>
  <div class="callback-container">
    <p>Processing login...</p>
  </div>
</template>

<style scoped>
.callback-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>