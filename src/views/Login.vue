<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl mb-4">登录后台</h1>
    <el-form :model="form" :rules="rules" ref="loginForm" class="w-64">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loginForm = ref(null)

const form = ref({
  username: '',
  password: ''
})

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const router = useRouter()

const login = () => {
  console.log('点击登录：', form.value) // ✅ 添加调试信息
  loginForm.value.validate((valid) => {
    if (valid) {
      if (form.value.username === 'admin' && form.value.password === '123456') {
        localStorage.setItem('token', 'mock-token')
        router.push('/')
      } else {
        alert('账号或密码错误')
      }
    } else {
      console.log('表单验证失败')
    }
  })
}
</script>

