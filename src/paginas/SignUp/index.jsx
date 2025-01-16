import {Container, Form, Background} from './styles'
import {FiLogIn, FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Link } from "react-router-dom";
import {Input} from '../../components/input' 
import {Button} from '../../components/Button'
import {Check} from '../../components/check'

export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Receitas</h1>
                <p>Aplicação para ver receitas</p>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" type="text"/>
                <Input placeholder="Email" type="text"/>
                <Input placeholder="Senha" type="password"/>
                <Check placeholder="Senha" type="checkbox"/>
                <Button title="Entrar"/>
                <Link to="/">Voltar para o login</Link>
            </Form>
        </Container>
    )
}