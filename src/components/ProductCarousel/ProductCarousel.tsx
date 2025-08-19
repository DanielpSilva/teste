import { useEffect, useState } from 'react'
import styles from './ProductCarousel.module.scss'
import ProductModal from '../../components/ProductModal/ProductModal'
import type { Product } from '../../types/product'
import { formatBRL } from '../../utils/format'

import { fetchProducts, type ApiProduct } from '../../services/productService'

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function loadProducts() {
      const apiProducts = await fetchProducts()
      const mapped = apiProducts.map((p: ApiProduct) => ({
        productName: p.productName,
        description: p.descriptionShort,
        price: formatBRL(p.price),
        photo: p.photo,
        oldPrice: formatBRL(p.price * 1.1),
        installments: `ou 2x de ${formatBRL(p.price / 2)} sem juros`,
        shipping: 'Frete grátis',
      }))
      setProducts(mapped)
    }
    loadProducts()
  }, [])

  const handleOpenModal = (index: number) => {
    setSelectedProduct(products[index] || null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const scroll = (dir: 'left' | 'right') => {
    const container = document.querySelector(`.${styles.carouselTrack}`)
    if (container) {
      const scrollAmount = dir === 'left' ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.container}>
      <span
        className={`${styles.carouselArrow} ${styles.left}`}
        onClick={() => scroll('left')}
      >
        &lt;
      </span>
      <div className={styles.productCarousel}>
        <div className={styles.carouselTrack}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.photo} alt={product.productName} />
              </div>
              <div className={styles.productDetails}>
                <p className={styles.productName}>{product.productName}</p>
                <p className={styles.productOldPrice}>{product.oldPrice}</p>
                <p className={styles.productPrice}>{product.price}</p>
                <p className={styles.productInstallments}>
                  {product.installments}
                </p>
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
        </div>
      </div>
      <span
        className={`${styles.carouselArrow} ${styles.right}`}
        onClick={() => scroll('right')}
      >
        &gt;
      </span>
      <ProductModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  )
}
