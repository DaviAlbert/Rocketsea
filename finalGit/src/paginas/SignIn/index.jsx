import {Container, Form, Background} from './styles'
import {FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../components/input' 
import {Button} from '../../components/Button' 
import { Link } from "react-router-dom";

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Receitas</h1>
                <p>Aplicação para ver receitas</p>
                <h2>Faça seu login</h2>
                <Input icon={FiMail} placeholder="Email" type="text"/>
                <Input icon={FiLock} placeholder="Senha" type="passwprd"/>
                <Button title="Cadastrar"/>
                <Link to="./SignUp">Criar Conta</Link>
            </Form>
            <Background/>
        </Container>
    )
}