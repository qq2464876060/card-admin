<template>
    <div class="main-layout">
      <el-container style="height: 100vh;">
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <Sidebar />
        </el-aside>
  
        <!-- 主体内容 -->
        <el-container>
          <!-- 顶部导航 -->
          <el-header style="background-color: #409EFF; color: white; text-align: right; padding: 0 20px;">
            <span>管理员：{{ user?.username }}</span>
            <el-button type="text" style="color: white;" @click="logout">退出</el-button>
          </el-header>
  
          <!-- 内容区 -->
          <el-main style="padding: 20px;">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import Sidebar from './components/Sidebar.vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  const store = useStore()
  const router = useRouter()
  
  const user = store.state.user
  
  const logout = () => {
    store.commit('clearUser')
    router.push('/login')
  }
  </script>
  