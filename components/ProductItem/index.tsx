import styles from './ProductItem.module.css';

export function ProductItem() {
  return (
    <div className={styles.container}>
      <div className={styles.head}></div>

      <div className={styles.info}>
        <div className={styles.imageContainer}>
          <img src="/tmp/product.png" alt="Produto" />
        </div>

        <div className={styles.categoryName}>Tradicional</div>
        <div className={styles.productName}>Hambúrguer</div>
        <div className={styles.productPrice}>R$25,50</div>
      </div>
    </div>
  );
}
