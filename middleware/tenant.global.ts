import { useTenant } from "~/composables/useTenant";

export default defineNuxtRouteMiddleware((to, from) => {
  const domain = useRequestHeaders()["host"];
  const tenant = getTenantByDomain(domain);

  console.log(domain);
  console.log(tenant);

  if (!tenant) {
    return abortNavigation("Tenant not found");
  }

  // Kiracı bilgilerini Vuex veya Nuxt composable ile saklayın
  useTenant().value = tenant;
});

function getTenantByDomain(domain: string) {
  const tenants: any = {
    "kreon.healsynchub.com": { name: "Kreon", theme: "themeKreon" },
    "beezsoft.healsynchub.com": { name: "Beezsoft", theme: "themeBeezsoft" },
  };

  return tenants[domain] || null;
}
