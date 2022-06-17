export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case 'b7burger':
        return {
          name: 'B7Burger',
          mainColor: '#fb9400',
          secondColor: '#fff9f2'
        }
      case 'b7pizza':
        return {
          name: 'B7Pizza',
          mainColor: '#0000FF',
          secondColor: '#00FF00'
        }
      default: return false;
    }
  }
});
