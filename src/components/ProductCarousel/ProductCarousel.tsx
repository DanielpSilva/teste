import { useEffect, useState } from 'react';
import styles from './ProductCarousel.module.scss';
import ProductModal from '../../components/ProductModal/ProductModal';
import type { Product } from "../../types/product";
import { formatBRL } from '../../utils/format';

import { fetchProducts, type ApiProduct } from '../../services/productServices';

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const apiProducts = await fetchProducts();
        const mappedProducts: Product[] = apiProducts.map((p: ApiProduct) => {
          const formattedPrice = formatBRL(p.price);
          const oldPrice = formatBRL(p.price * 1.1); // Ex: 10% acima do preço atual
          const installments = `ou 2x de ${formatBRL(p.price / 2)} sem juros`;

          return {
            productName: p.productName,
            description: p.descriptionShort,
            price: formattedPrice,
            photo: p.photo,
            oldPrice,
            installments,
            shipping: "Frete grátis",
          };
        });
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    loadProducts();
  }, []);

  const handleOpenModal = (index: number) => {
    const productFromApi = products[index];
    if (!productFromApi) return;

    setSelectedProduct(productFromApi);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productCarousel}>
        <span className={styles.carouselArrow}>&lt;</span>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={product.photo} alt={product.productName} />
            </div>
            <div className={styles.productDetails}>
              <p className={styles.productName}>{product.productName}</p>
              <p className={styles.productOldPrice}>{product.oldPrice}</p>
              <p className={styles.productPrice}>{product.price}</p>
              <p className={styles.productInstallments}>{product.installments}</p>
              <p className={styles.productShipping}>{product.shipping}</p>
            </div>
            <button
              className={styles.buyButton}
              onClick={() => handleOpenModal(index)}
            >
              COMPRAR
            </button>
          </div>
        ))}
        <span className={styles.carouselArrow}>&gt;</span>
      </div>
      <ProductModal isOpen={isModalOpen} product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}