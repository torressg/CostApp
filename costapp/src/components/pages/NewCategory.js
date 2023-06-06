import { useNavigate } from 'react-router-dom'
import { CategoryForm } from '../project/CategoryForm'

import styles from './NewProject.module.css'

export function NewCategory() {

    const history = useNavigate()

    function createPost(category){


        fetch('http://localhost:5000/categories',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(category),
        }).then((resp) => resp.json())
        .then((data) => {
            history('/newproject', {state:{message : "Categoria criado com sucesso!"}});
        })
        .catch((error) => console.log(error))

    }

    return(
        <div className={styles.newprojectcontainer}>
            <h1>Criar Categoria</h1>
            <p>Crie a categoria que deseja.</p>
            <CategoryForm handleSubmit={createPost} btnText='Criar Categoria'/>
        </div>
    )
}