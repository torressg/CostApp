import { useEffect, useState } from 'react'
import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { Submit } from '../form/Submit'
import styles from './ProjectForm.module.css'

export function CategoryForm({ btnText, handleSubmit, categoryData }) {

    const [category, setCategory] = useState(categoryData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(category)
    }

    function handleChange(e) {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

        return (

            <form onSubmit={submit} className={styles.form}>
                <div>
                    <Input
                        type="text"
                        text="Nome da categoria"
                        name="name"
                        placeholder="Insira o nome da categoria"
                        handleOnChange={handleChange}
                        value={category.name}
                    />
                </div>
                <div>
                <Submit
                    text={btnText}
                />
                </div>
            </form>
        )
    }
