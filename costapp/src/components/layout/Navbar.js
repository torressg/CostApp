import { Link } from 'react-router-dom'

import { Container } from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Cost App" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" className={styles.a}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects" className={styles.a}>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact" className={styles.a}>Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about" className={styles.a}>Sobre nós</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}