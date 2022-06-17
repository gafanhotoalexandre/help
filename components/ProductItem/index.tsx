// types
import Link from 'next/link';
import { Product } from '../../types/Product';

import styles from './ProductItem.module.css';

interface ProductItemProps {
  data: Product;
  mainColor: string;
  secondColor: string;
}

export function ProductItem({ data, mainColor, secondColor }: ProductItemProps) {
  return (
    <Link href={`/b7burger/product/${data.id}`}>
      <a className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: secondColor }}
        ></div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <img src={data.image} alt="Produto" />
          </div>

          <div className={styles.categoryName}>{data.categoryName}</div>
          <div className={styles.productName}>{data.name}</div>
          <div
            className={styles.productPrice}
            style={{ color: mainColor }}
          >R${data.price}</div>
        </div>
      </a>
    </Link>
  );
}
