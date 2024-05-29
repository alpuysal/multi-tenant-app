<template>
  <div :class="tenantTheme">
    <NuxtPage />
  </div>
</template>

<script setup>
const tenant = useTenant().value;
const tenantTheme = tenant ? tenant.theme : 'default-theme';
</script>

<style>
.themeKreon {
  /* Tenant 1 özel stilleri */
  background-color: blue;
}

.themeBeezsoft {
  /* Tenant 2 özel stilleri */
  background-color: red;

}

.default-theme {
  /* Varsayılan tema */
  background-color: aliceblue;
}
</style>
