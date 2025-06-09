<template>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/users">
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/roles">
        <span>角色权限</span>
      </el-menu-item>
      <el-menu-item index="/logs">
        <span>操作日志</span>
      </el-menu-item>
      <el-menu-item index="/settings">
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const activeMenu = computed(() => {
    return route.path === '/' ? '/' : route.path
  })
  </script>
  
  <style scoped>
  .el-menu {
    border-right: none;
  }
  </style>
  