import styles from './Select.module.css'

export function Select({ text, name, options, handleOnChange, value }) {
    return(
        <div className={styles.formcontrol}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}