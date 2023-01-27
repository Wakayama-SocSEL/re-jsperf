import { SearchType } from '@/types/types'
import styles from '@/styles/components/List.module.scss'

export const List = ({ data }: Record<'data', SearchType[]>) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id} className={styles.item}>
          <a href={`/re-jsperf/benchmarks/${item.id}`} className={styles.link}>
            {item.title}
          </a>
          <p className={styles.description}>{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
