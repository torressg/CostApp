import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Loading } from '../layout/Loading'
import { Container } from '../layout/Container'
import { ProjectForm } from '../project/ProjectForm'
import { Message } from '../layout/Message'

import styles from './ProjectEdit.module.css'

export function ProjectEdit() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((error) => console.log(error))
        }, 300)
    }, [id])

    function editPost(project) {
        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado!')
                setType('success')

            })
            .catch(error => console.log(error))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (<>
        {project.name ? (
            <div className={styles.projectcont}>
                {message && <Message type={type} msg={message} />}
                <Container customClass="column">
                    <div className={styles.infocont}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                        {!showProjectForm ? (
                            <div className={styles.projectinfo}>
                                <p>
                                    <span>Categoria: </span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento: </span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado: </span> R${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.projectinfo}>
                                <ProjectForm
                                    handleSubmit={editPost}
                                    btnText="Concluir edição"
                                    projectData={project}
                                />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        ) : (
            <Loading />
        )}
    </>

    )
}