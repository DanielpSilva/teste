import styles from './ProductCart.module.scss';

import macbook from '../../assets/images/Macbooks.png';

export default function ProductCart() {

    const productsCards = [
        {
            titulo: "Parceiros",
            name: "Lorem ipsum dolor sit amet, consectetur.",
            image: macbook
        },
        {
            titulo: "Parceiros",
            name: "Lorem ipsum dolor sit amet, consectetur.",
            image: macbook
        }
    ]
    return (
        <div className={styles.productCart}>
            {productsCards.map((product, index) => (
                <div key={index}>
                    <div className={styles.productImage}>
                        <img src={product.image} alt="photos-macbooks" />
                        <div className={styles.productDetails}>
                            <h1>{product.titulo}</h1>
                            <h3>{product.name}</h3>
                            <button>Confira</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

