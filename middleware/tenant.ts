import { useTenant } from "~/composables/useTenant";

export default defineNuxtRouteMiddleware((to, from) => {
  const domain = useRequestHeaders()["host"];
  const tenant = getTenantByDomain(domain);

  if (!tenant) {
    return abortNavigation("Tenant not found");
  }

  // Kiracı bilgilerini Vuex veya Nuxt composable ile saklayın
  useTenant().value = tenant;
});

function getTenantByDomain(domain: string) {
  const tenants: any = {
    "kreon.humon.jobs": { name: "Kreon", theme: "themeKreon" },
    "beezsoft.humon.jobs": { name: "Beezsoft", theme: "themeBeezsoft" },
  };

  return tenants[domain] || null;
}
