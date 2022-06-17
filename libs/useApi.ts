import { Tenant } from "../types/Tenant";

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case 'b7burger':
        return {
          slug: 'b7burger',
          name: 'B7Burger',
          mainColor: '#fb9400',
          secondColor: '#fff9f2'
        }
      case 'b7pizza':
        return {
          slug: 'b7pizza',
          name: 'B7Pizza',
          mainColor: '#6ab70a',
          secondColor: '#e0e0e0'
        }
      default: return false;
    }
  }
});
