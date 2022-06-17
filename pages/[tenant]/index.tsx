// components
import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import { useApi } from '../../libs/useApi';

import styles from '../../styles/Home.module.css';

export default function Home() {
  const api = useApi();
  const tenant = api.getTenant('b7burger');

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
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <SearchInput
            mainColor='#fb9400'
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
          mainColor='#fb9400'
          secondColor='#fff9f2'
        />
        <ProductItem
          data={{
            id: 2,
            image: '/tmp/product.png',
            categoryName: 'Tradicional X',
            name: 'Texas Burger',
            price: '25,50'
          }}
          mainColor='#fb9400'
          secondColor='#fff9f2'
        />
        <ProductItem
          data={{
            id: 3,
            image: '/tmp/product.png',
            categoryName: 'Tradicional X',
            name: 'Texas Burger',
            price: '25,50'
          }}
          mainColor='#fb9400'
          secondColor='#fff9f2'
        />
      </div>
    </div>
  );
}
