import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.sociallist}>
                <li >
                    <FaFacebook />
                </li>
                <li >
                    <FaInstagram />
                </li>
                <li >
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copyright}>
                Costs <span className={styles.copy}>&copy;</span> 2021
            </p>
        </footer>
    )
}