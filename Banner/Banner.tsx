import styles from './Banner.module.scss';

import banner from '../../assets/banner/Banner.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <img src={banner} alt="imagem-banner" />
        <div className={styles.content}>
            <h1>Venha conhecer nossas <span>promoções</span></h1>
            <p><strong>50% off</strong> nos produtos</p>
            <button>Ver produtos</button>
        </div>
    </div>
  )
}


