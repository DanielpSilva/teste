import styles from './CategoryTabs.module.scss'

const tabs = [
    'CELULAR',
    'TABLETS',
    'NOTEBOOKS',
    'TVS',
    'VER TODOS',
];

type RelatedProductsTabsProps = {
    activeTab: string;
    isVisible: boolean;
};

export default function RelatedProductsTabs({ activeTab, isVisible }: RelatedProductsTabsProps) {
    if (!isVisible) {
        return null; // Não renderiza nada se isVisible for false
    }

    return (
        <div className={styles.relatedProductsTabs}>
            <ul className={styles.tabsList}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={` ${styles.tabItem} ${activeTab === tab ? 'active' : ''}`}
                    >
                        <a href="#" className={styles.tabLink}>
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

