export default defineNuxtRouteMiddleware((to, from) => {
  const requestURL = useRequestURL();
  const host = requestURL.host;

  console.log(host);

  // Basit bir tenant eşleme örneği
  const tenants: any = {
    "tenant1.localhost:3000": "tenant1",
    "tenant2.localhost:3000": "tenant2",
  };

  const tenant = tenants[host];

  if (!tenant) {
    return navigateTo("/error"); // Tenant bulunamazsa hata sayfasına yönlendir
  }

  // Tenant bilgisini global state'e kaydet
  useState("tenant", () => tenant);
});
