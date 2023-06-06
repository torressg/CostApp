import { useNavigate, useLocation } from 'react-router-dom'

import { Message } from '../layout/Message'
import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){

    const history = useNavigate()

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

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
            {message && <Message msg={message} type="success"/>}
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto'/>
        </div>
    )
}