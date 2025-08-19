
import styles from './Category.module.scss'

//icons
import tecnologia from '../../assets/iconsCategories/Tecnologia.png'
import supermarket from '../../assets/iconsCategories/Supermarket.png'
import drinks from '../../assets/iconsCategories/Drinks.png'
import tools from '../../assets/iconsCategories/Tools.png'
import health from '../../assets/iconsCategories/Health.png'
import sports from '../../assets/iconsCategories/Sports.png'
import fashion from  '../../assets/iconsCategories/Fashion.png'

export default function Category() {

  const categories = [
    {icons: tecnologia, text: "Tecnologia", href: '/tecnologia'},
    {icons: supermarket, text: "Supermercado", href: '/supermercado'},
    {icons: drinks, text: "Bebidas", href: '/drinks'},
    {icons: tools, text: "Ferramentas", href: '/ferramentas'},
    {icons: health, text: "Saúde", href: '/saude'},
    {icons: sports, text: "Esportes", href: '/esportes'},
    {icons: fashion, text: "Moda", href: '/moda'},
  ]
  
  return (
    <div className={styles.category}>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <div className={styles.iconBox}>
              <img src={item.icons} alt={item.text} />
            </div>
            <a href={item.href}>{item.text}</a>
            </li>
        ))}
      </ul>
    </div>
  )
}


