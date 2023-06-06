import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

export function ServiceCard({ id, name, cost, desc, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <div className={styles.card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
            </p>
            <p>{desc}</p>
            <div className={styles.actioncards}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Remover
                </button>
            </div>
        </div>
    )
}