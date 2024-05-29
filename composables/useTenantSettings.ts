export const useTenantSettings = () => {
  const tenant: any = useState("tenant").value;

  const settings: any = {
    tenant1: {
      theme: "light",
      database: "db_tenant1",
    },
    tenant2: {
      theme: "dark",
      database: "db_tenant2",
    },
  };

  return settings[tenant];
};
