<template>
    <div class="logs-page">
      <el-card>
        <el-table :data="logs" style="width: 100%">
          <el-table-column prop="id" label="ID" width="60" />
          <el-table-column prop="username" label="用户名" width="120" />
          <el-table-column prop="ip" label="IP 地址" />
          <el-table-column prop="browser" label="浏览器" />
          <el-table-column prop="time" label="登录时间" />
        </el-table>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const logs = ref([
    {
      id: 1,
      username: 'admin',
      ip: '192.168.1.1',
      browser: 'Chrome 114.0',
      time: '2025-06-01 14:32:45'
    },
    {
      id: 2,
      username: '运营人员',
      ip: '10.0.0.8',
      browser: 'Edge 125.0',
      time: '2025-06-01 15:08:19'
    }
  ])
  </script>
  