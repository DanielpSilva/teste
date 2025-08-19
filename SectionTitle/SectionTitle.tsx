import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
    title?: string;
    showAll?: boolean;
}

export default function SectionTitle({ title = "Produtos Relacionados", showAll = false }: SectionTitleProps) {
    return (
        <>
            <div className={styles.divider}>
                <h2>{title}</h2>
            </div>
            {showAll && <p>Ver Todos</p>}
        </>
    )
}

