import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"

import styles from './Project.module.css'

import { Message } from '../layout/Message'
import { Container } from '../layout/Container'
import { Loading } from '../layout/Loading'
import { LinkButton } from '../layout/LinkButton'
import { ProjectCard } from '../project/ProjectCard'


export function Projects(){

    const [projects, setProjects] = useState([])
    const [removeloading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            console.log(data)
            setRemoveLoading(true)
        }).catch((error) => console.log(error))

    }, [])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(error => console.log(error))
    }

    return(
        <div className={styles.projectcont}>
            <div className={styles.titlecont}>
                <h1>Meu Projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto'/>
            </div>
            {message && <Message msg={message} type="success"/>}
            {projectMessage && <Message msg={projectMessage} type="success"/>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                    {!removeloading && <Loading />}
            </Container>
        </div>
    )
}