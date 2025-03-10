import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  const setUser = (userData: any) => {
    user.value = userData;
    isAuthenticated.value = true;
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
  };

  return {
    user,
    isAuthenticated,
    setUser,
    logout
  };
});