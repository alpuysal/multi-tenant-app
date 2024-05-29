<template>
  <div :class="theme">
    <h1>Welcome to {{ tenant }}'s page</h1>
  </div>
</template>

<script setup lang="ts">
const { theme } = useTenantSettings();
const tenant = useState('tenant').value;
</script>

<style scoped>
.light {
  background-color: white;
  color: black;
}

.dark {
  background-color: black;
  color: white;
}
</style>
