import {LinkButton} from '../layout/LinkButton'

import styles from './Home.module.css'
import saving from '../../img/savings.svg'

export function Home(){
    return(
        <section className={styles.homecontainer}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar projeto'/>
            <img src={saving} alt="Costs"/>
        </section>
    )
}