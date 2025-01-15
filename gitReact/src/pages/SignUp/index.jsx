import {Container, Form, Background} from './styles'
import {FiLogIn, FiMail, FiLock, FiUser} from 'react-icons/fi'
import {Input} from '../../components/input' 
import {Button} from '../../components/Button' 

export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>
                <Input icon={FiMail} placeholder="Nome" type="text"/>
                <Input icon={FiUser} placeholder="Email" type="text"/>
                <Input icon={FiLock} placeholder="Senha" type="passwprd"/>
                <Button title="Entrar"/>
                <a href="#">Criar Conta</a>
            </Form>
        </Container>
    )
}