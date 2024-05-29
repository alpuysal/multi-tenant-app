<template>
  <div>
    <h1>Welcome to {{ tenant }}'s page</h1>
  </div>
</template>

<script setup lang="ts">
const tenant = useState('tenant').value;
</script>
