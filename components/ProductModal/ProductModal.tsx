import React, { useState } from "react";
import styles from "./ProductModal.module.scss";
import type { Product } from "../../types/product";



interface ProductModalProps { 
  isOpen: boolean;
  onClose: () => void;
  product: Product | null,
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  
  const [quantity, setQuantity] = useState(1); 
  if (!isOpen || !product) return null;

  console.log(product)

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <div className={styles.content}>
          <img src={product.photo} alt='foto-iphone' className={styles.productImage} />
          <div className={styles.details}>

            <div className={styles.title}>
              <h2>LOREM IPSUM DOLOR SIT AMET</h2>
              <span>{product.price}</span>
            </div>
    
            <div className={styles.productsDetails}>
              <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
              <a href="#">Veja mais detalhes do produto &gt;</a>
            </div>

            <div className={styles.allButton}>
              <div className={styles.quantity}>
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
            <button
              className={styles.buyBtn}
              onClick={() => alert("Produto adicionado ao carrinho!")}
            >
              COMPRAR
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
export default ProductModal;