
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl mb-4">登录后台</h1>
    <input v-model="username" placeholder="用户名" class="border p-2 mb-2" />
    <input v-model="password" type="password" placeholder="密码" class="border p-2 mb-2" />
    <button @click="login" class="bg-blue-500 text-white px-4 py-2">登录</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  if (username.value === 'admin' && password.value === '123456') {
    router.push('/home')
  } else {
    alert('账号或密码错误')
  }
}
</script>
