import styles from './BrowseBrands.module.scss'

import soon from '../../assets/soon/Soon.png'

export default function BrowseBrand() {

    const brands = [
        {
            image: soon
        },
        {
            image: soon
        },
        {
            image: soon
        },
        {
            image: soon
        },
        {
            image: soon
        }
    ]

    return (
        <div>
            <h1 className={styles.title}>Navegue por marcas</h1>
            <div className={styles.containerBrands}> 
                {brands.map((brand, index) => (
                <div key={index}> 
                    <div className={styles.imgBrands}>
                        <img src={brand.image} alt="imagens-logo" />
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

