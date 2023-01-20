import styles from '@/styles/components/SearchForm.module.scss'

export const SearchForm = () => {
  return (
    <div className={styles.form}>
      <input className={styles.input} placeholder="for vs foreach" />
      <div className={styles.button} role="button">
        検索
      </div>
    </div>
  )
}
