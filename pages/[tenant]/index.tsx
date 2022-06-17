// components
import { Banner } from '../../components/Banner';
import { SearchInput } from '../../components/SearchInput';

import styles from '../../styles/Home.module.css';

export default function Home() {
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
    </div>
  );
}
