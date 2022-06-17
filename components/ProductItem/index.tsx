// types
import Link from 'next/link';

// contexts
import { useAppContext } from '../../contexts/AppContext';

// types
import { Product } from '../../types/Product';

import styles from './ProductItem.module.css';

interface ProductItemProps {
  data: Product;
}

export function ProductItem({ data }: ProductItemProps) {
  const { tenant } = useAppContext();
  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`}>
      <a className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: tenant?.secondColor }}
        ></div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <img src={data.image} alt="Produto" />
          </div>

          <div className={styles.categoryName}>{data.categoryName}</div>
          <div className={styles.productName}>{data.name}</div>
          <div
            className={styles.productPrice}
            style={{ color: tenant?.mainColor }}
          >R${data.price}</div>
        </div>
      </a>
    </Link>
  );
}
