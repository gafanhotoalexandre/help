import { GetServerSideProps } from 'next';

// components
import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import { getTenantResponse, useApi } from '../../libs/useApi';

import styles from '../../styles/Home.module.css';

export default function Home(data: HomeProps) {

  function handleSearch(searchValue: string) {
    console.log('Você está buscando por...', searchValue);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo (a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>

          <div className={styles.headerTopMenu}>
            <div className={styles.menuButton}>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: data.tenant.mainColor }}
              ></div>

              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: data.tenant.mainColor }}
              ></div>

              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: data.tenant.mainColor }}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <SearchInput
            mainColor={data.tenant.mainColor}
            onSearch={handleSearch}
          />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: '/tmp/product.png',
            categoryName: 'Tradicional X',
            name: 'Texas Burger',
            price: '25,50'
          }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
        <ProductItem
          data={{
            id: 2,
            image: '/tmp/product.png',
            categoryName: 'Tradicional X',
            name: 'Texas Burger',
            price: '25,50'
          }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
        <ProductItem
          data={{
            id: 3,
            image: '/tmp/product.png',
            categoryName: 'Tradicional X',
            name: 'Texas Burger',
            price: '25,50'
          }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
      </div>
    </div>
  );
}

interface HomeProps {
  tenant: getTenantResponse
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi(); // eslint-disable-line

  // get tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return { redirect: { destination: '/', permanent: false } }
  }

  return {
    props: {
      tenant
    }
  }
}
