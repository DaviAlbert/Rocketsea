import {Container} from './styles'

export function Check({title, ... rest}){
    return(
        <Container>
            <div className="checkbox-container">
                <input {...rest}/>
                <span className="checkmark"></span>
            </div>
            <h1>Admin</h1>
        </Container>
    )
}