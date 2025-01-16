import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/section'
import { Input } from '../../components/input'
import { Note } from '../../components/note'

export function Inicio() {
  return (
    <Container>
      <Brand>
        <h1>Food explorer</h1>
      </Brand>

      <Header/>

      <Search>
        <Input placeholder="Pesquisar pelo nome do prato." icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
            <Note data={{title: 'Strogonoff', tags: [{id: 1, name: 'Quente'}, {id: 2, name: 'salgado'}]}}/>
            <Note data={{title: 'Macarrao', tags: [{id: 1, name: 'Quente'}, {id: 2, name: 'salgado'}]}}/>
            <Note data={{title: 'Bolo', tags: [{id: 1, name: 'Frio'}, {id: 2, name: 'Doce'}]}}/>
        </Section>
      </Content>
    </Container>
  )
}