import loading from '../../img/loading.svg'
import styles from './Loading.module.css'

export function Loading(){
    return(
        <div className={styles.LoadingContainer}>
            <img src={loading} alt="Loading" className={styles.Loading} />
        </div>

    )
}