import {Container, Profile, Logout} from './styles'
import { Button } from '../../components/Button'
import { RiShutDownLine } from "react-icons/ri";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/orodrigogo.png" alt="Foto do usuário"/>
                <div>
                    <strong>Food Explorer</strong>
                    <span>Administrdor</span>
                </div>
                <Button title="Pedidos"/>
            </Profile>
        </Container>
    )
}