<template>
  <user-edit-form v-model="user" />
  <pre>Bound value: {{ user }}</pre>
</template>
<script setup>
import { ref } from 'vue'
import UserEditForm from './user-edit-form.vue'

const user = ref({
  firstName: '홍',
  lastName: '길동',
  city: '서울특별시',
  country: '대한민국',
  email: 'exp@s.com',
  phone: '010-3348-XXXX'
})
</script>
