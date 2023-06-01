import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { Submit } from '../form/Submit'
import styles from './ProjectForm.module.css'

export function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <div>
                <Input
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                />
            </div>
            <div>
                <Input
                    type="number"
                    text="Orçamento do projeto"
                    name="budget"
                    placeholder="Insira o orçamento do projeto"
                />
            </div>
            <div>
                <Select
                    name="category_id"
                    text="Selecione a categoria"

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