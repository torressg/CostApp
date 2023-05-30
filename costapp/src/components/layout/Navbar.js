import { Link } from 'react-router-dom'

import { Container } from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

export function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Cost App" />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/" className={styles.a}>Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/projects" className={styles.a}>Projetos</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/contact" className={styles.a}>Contato</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/about" className={styles.a}>Sobre nós</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}