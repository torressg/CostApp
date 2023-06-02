import { useNavigate } from 'react-router-dom'

import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){

    const history = useNavigate()

    function createPost(project){

        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            history('/projects', {state:{message : "Projeto criado com sucesso!"}});
        })
        .catch((error) => console.log(error))

    }

    return(
        <div className={styles.newprojectcontainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto'/>
        </div>
    )
}