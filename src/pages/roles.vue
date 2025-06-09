<template>
    <div class="roles-page">
      <el-card>
        <div style="margin-bottom: 10px; display: flex; justify-content: space-between;">
          <el-button type="primary" @click="openDialog()">新增角色</el-button>
        </div>
        <el-table :data="roles" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="name" label="角色名" />
          <el-table-column prop="permissions" label="权限">
            <template #default="{ row }">{{ row.permissions.join(', ') }}</template>
          </el-table-column>
          <el-table-column label="操作" width="160">
            <template #default="{ row }">
              <el-button size="small" @click="openDialog(row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
  
      <el-dialog :title="editForm.id ? '编辑角色' : '新增角色'" v-model="dialogVisible">
        <el-form :model="editForm" label-width="100px">
          <el-form-item label="角色名">
            <el-input v-model="editForm.name" />
          </el-form-item>
          <el-form-item label="权限配置">
            <el-checkbox-group v-model="editForm.permissions">
              <el-checkbox label="用户管理" />
              <el-checkbox label="权限控制" />
              <el-checkbox label="操作日志" />
              <el-checkbox label="胜率设置" />
              <el-checkbox label="系统设置" />
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveRole">保存</el-button>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const roles = ref([
    { id: 1, name: '超级管理员', permissions: ['用户管理', '权限控制', '操作日志'] },
    { id: 2, name: '运营人员', permissions: ['胜率设置', '用户管理'] }
  ])
  
  const dialogVisible = ref(false)
  const editForm = ref({ id: null, name: '', permissions: [] })
  
  const openDialog = (role = null) => {
    if (role) {
      editForm.value = { ...role }
    } else {
      editForm.value = { id: null, name: '', permissions: [] }
    }
    dialogVisible.value = true
  }
  
  const saveRole = () => {
    if (editForm.value.id) {
      const index = roles.value.findIndex(r => r.id === editForm.value.id)
      if (index !== -1) roles.value[index] = { ...editForm.value }
    } else {
      const newId = roles.value.length + 1
      roles.value.push({ ...editForm.value, id: newId })
    }
    dialogVisible.value = false
  }
  </script>
  