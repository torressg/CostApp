import { Message } from "../layout/Message";
import { useLocation } from 'react-router-dom'

export function Projects(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message msg={message} type="success"/>}
        </div>
    )
}