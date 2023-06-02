import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill, BsPen } from 'react-icons/bs'

export function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.categorytext}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.actioncards}>
                <Link to='/'>
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}