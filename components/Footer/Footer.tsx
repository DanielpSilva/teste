import styles from './Footer.module.scss'

import soon from "../../assets/soon/Soon.png"
import instagram from "../../assets/icons/instagram1.png"
import facebook from "../../assets/icons/facebook.png"
import linkedin from "../../assets/icons/linkedin.png"

export default function Footer() {


  return (
    
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <img src={soon} alt="Econverse Logo" className={styles.footerSoon} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className={styles.footerSocials}>
            {[
              { href: "#", src: instagram, alt: "Instagram" },
              { href: "#", src: facebook, alt: "Facebook" },
              { href: "#", src: linkedin, alt: "LinkedIn" }
            ].map((social, index) => (
              <a key={index} href={social.href}>
                <img src={social.src} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Movimento</a></li>
            <li><a href="#">Trabalhe Conosco</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Perguntas Frequentes</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Termos</h4>
          <ul>
            <li><a href="#">Termos e Condições</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Troca e Devolução</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
</footer>
   
  )
}


