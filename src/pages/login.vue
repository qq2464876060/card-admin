<template>
    <div class="login-container">
      <div class="login-box">
        <h2 class="title">Card Admin 登录</h2>
        <el-form :model="form" :rules="rules" ref="loginForm" label-position="top">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin" :loading="loading" class="login-btn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  
  const router = useRouter()
  const form = reactive({ username: '', password: '' })
  const rules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  }
  const loginForm = ref()
  const loading = ref(false)
  
  const handleLogin = () => {
    loginForm.value.validate((valid) => {
      if (valid) {
        loading.value = true
        setTimeout(() => {
          loading.value = false
          if (form.username === 'admin' && form.password === 'admin') {
            localStorage.setItem('token', 'mock-token')
            localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'super' }))
            router.push('/')
          } else {
            ElMessage.error('账号或密码错误')
          }
        }, 1000)
      }
    })
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #4facfe, #00f2fe);
  }
  .login-box {
    width: 320px;
    padding: 30px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 600;
    color: #333;
  }
  .login-btn {
    width: 100%;
  }
  </style>
  