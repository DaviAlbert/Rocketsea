import {Container, Form, Background} from './styles'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../components/input' 
import {Button} from '../../components/Button' 

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu login</h2>
                <Input icon={FiMail} placeholder="Email" type="text"/>
                <Input icon={FiLock} placeholder="Senha" type="passwprd"/>
                <Button title="Cadastrar"/>
                <a href="#">Voltar para o login</a>
            </Form>
            <Background/>
        </Container>
    )
}