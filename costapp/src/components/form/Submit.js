import styles from './Submit.module.css'

export function Submit({ text }){
    return(
        <div className={styles.btn}>
            <input type="submit" value={text} />
        </div>
    )
}