import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { Submit } from '../form/Submit'
import styles from './ProjectForm.module.css'

export function ProjectForm({ btnText, handleSubmit, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((error) => console.log(error))
    }, []) 

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                />
            </div>
            <div>
                <Input
                    type="number"
                    text="Orçamento do projeto"
                    name="budget"
                    placeholder="Insira o orçamento do projeto"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                />
            </div>
            <div>
                <Select
                    name="category_id"
                    text="Selecione a categoria"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''}
                />
            </div>
            <div className={styles.linkcont}>
                <Link className={styles.link} to='/newcategory'>
                    Não encontrou a categoria?
                </Link>
            </div>
            <div>
                <Submit
                    text={btnText}
                />
            </div>
        </form>
    )
}