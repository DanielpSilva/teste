import styles from './Newsletter.module.scss'

export default function Newsletter() {
  return (
    <div className={styles.container}>
        <div className={styles.newsletterHeader}>
            <h1>Inscreva-se na nossa newsletter</h1>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <div className={styles.formContainer}>
            <form>
                <div className={styles.formFields}>
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="email" placeholder="Digite seu e-mail" />
                    <button type="submit">INSCREVER</button>
                </div>

                <div className={styles.formTerms}>
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">Aceito os termos e condições</label>
                </div>
            </form>
        </div>
    </div>
  )
}


