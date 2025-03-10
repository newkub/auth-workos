<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { Icon } from '@iconify/vue';

const router = useRouter();
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const isLoading = ref(false);

const handleEmailLogin = async () => {
  isLoading.value = true;
  try {
    // Implement email login logic here
    console.log('Email login:', email.value);
  } catch (error) {
    console.error('Login error:', error);
  } finally {
    isLoading.value = false;
  }
};

const handleGoogleLogin = () => {
  // Implement Google login logic
  console.log('Google login clicked');
};

const handlePasskeyLogin = () => {
  // Implement passkey login logic
  console.log('Passkey login clicked');
};

const handleForgotPassword = () => {
  // Implement forgot password logic
  console.log('Forgot password clicked');
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleEmailLogin">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a @click="handleForgotPassword" class="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <Icon icon="mdi:lock" class="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
            </span>
            {{ isLoading ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>

        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button
            type="button"
            @click="handlePasskeyLogin"
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <Icon icon="mdi:fingerprint" class="h-5 w-5 mr-2" />
            Passkey
          </button>
          
          <button
            type="button"
            @click="handleGoogleLogin"
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <Icon icon="mdi:google" class="h-5 w-5 mr-2" />
            Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>