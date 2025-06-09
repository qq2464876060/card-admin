<template>
    <div class="user-page">
      <el-card>
        <div style="margin-bottom: 10px;">
          <el-input v-model="search" placeholder="搜索用户名" style="width: 240px;" @input="handleSearch" clearable />
        </div>
        <el-table :data="filteredUsers" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="username" label="用户名" />
          <el-table-column prop="winRate" label="胜率">
            <template #default="{ row }">{{ row.winRate }}%</template>
          </el-table-column>
          <el-table-column prop="balance" label="账户余额(元)" />
          <el-table-column label="操作" width="160">
            <template #default="{ row }">
              <el-button size="small" @click="editUser(row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
  
      <el-dialog title="编辑用户" v-model="dialogVisible">
        <el-form :model="editForm" label-width="100px">
          <el-form-item label="胜率">
            <el-input-number v-model="editForm.winRate" :min="0" :max="100" />
          </el-form-item>
          <el-form-item label="账户余额">
            <el-input-number v-model="editForm.balance" :min="0" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveUser">保存</el-button>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const users = ref([
    { id: 1, username: '张三', winRate: 50, balance: 100 },
    { id: 2, username: '李四', winRate: 60, balance: 200 },
    { id: 3, username: '王五', winRate: 70, balance: 300 }
  ])
  
  const search = ref('')
  const dialogVisible = ref(false)
  const editForm = ref({ id: null, winRate: 0, balance: 0 })
  
  const filteredUsers = computed(() =>
    users.value.filter(u => u.username.includes(search.value))
  )
  
  const handleSearch = () => {
    // 可添加节流处理
  }
  
  const editUser = (user) => {
    editForm.value = { ...user }
    dialogVisible.value = true
  }
  
  const saveUser = () => {
    const index = users.value.findIndex(u => u.id === editForm.value.id)
    if (index !== -1) {
      users.value[index] = { ...editForm.value }
    }
    dialogVisible.value = false
  }
  </script>
  