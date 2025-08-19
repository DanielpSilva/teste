import styles from './Header.module.scss'
import soon from '../../assets/soon/Soon.png'

//icons
import shieldCheck from '../../assets/icons/ShieldCheck.png'
import truck from '../../assets/icons/Truck.png'
import creditCard from '../../assets/icons/CreditCard.png'
import box from '../../assets/icons/Box.png'
import heart from '../../assets/icons/Heart.png'
import user from '../../assets/icons/User.png'
import cart from '../../assets/icons/ShoppingCart.png'
import search from '../../assets/icons/Search.png'

import crownSimple from '../../assets/icons/CrownSimple.png'


export default function Header() {

    const menuLinks = [
  { text: "Todas as categorias", href: "/categorias" },
  { text: "Supermercado", href: "/supermercado" },
  { text: "Livros", href: "/livros" },
  { text: "Moda", href: "/moda" },
  { text: "Lançamentos", href: "/lancamentos" },
  { text: "Ofertas do dia", href: "/ofertas" },
  { icon: crownSimple, text: "Assinatura", href: "/assinatura" }
];

  return (
    <div className={styles.header}>
        <div className={styles.topBar}>
            <p> <img src={shieldCheck} alt="check" />Compra <strong>100% segura</strong> </p>
            <p> <img src={truck} alt="truck" /><strong>Frete grátis</strong> acima de R$ 200</p>
            <p> <img src={creditCard} alt="creditcard" /><strong>Parcele</strong> suas compras</p>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.headerContent}>
            <div className={styles.logo}>
            <a href="/">
                <img src={soon} alt="Econverse Logo" />
            </a>
            </div>

            <form action="/search" method="get" className={styles.searchForm}>
                <label htmlFor="search" className={styles.srOnly}></label>
                <input type="text" id="search" name="q" placeholder="O que você está buscando?" />
                <button type="submit"></button>
                <img src={search} alt="icon-search" />
            </form>

            <div className={styles.userActions}>
                <a href="/user" aria-label='box'><img src={box} alt="icon-box" /></a>
                <a href="/favorites" aria-label='Favoritos'><img src={heart} alt="icon-heart" /></a>
                <a href="/account" aria-label="Minha conta"><img src={user} alt="icon-user" /></a>
                <a href="/cart" aria-label="Carrinho de compras"><img src={cart} alt="icon-cart" /></a>
            </div>
        </div>
        <div className={styles.linhaTop}></div>
        <div className={styles.headerNav}>
            <nav>
                <ul>
                    {menuLinks.map((item,index ) => (
                    <li key={index}>
                        {item.icon && <img src={item.icon} alt={item.text} />}
                        <a href={item.href}>{item.text}</a>
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
  )
}


