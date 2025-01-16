import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Search, Content } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/section'
import { Note } from '../../components/note'
import image from '../../assets/salada.png'

export function Detalhes() {
  return (
    <Container>
      <Brand to="/detalhes">
        <h1>Voltar</h1>
      </Brand>
        <Search>
            <h1>Strogonoff</h1>
            <img src={image} alt="Imagem" />
        </Search>
      <Content>
        <Section title="Descrição">
            <Note data={{title: 'Strogonoff', tags: [{id: 1, name: 'Quente'}, {id: 2, name: 'salgado'}]}} value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quam voluptates pariatur dolores assumenda laboriosam explicabo eius nobis delectus itaque. Reprehenderit ex quod saepe, temporibus pariatur tempora voluptate quidem magni!"/>
        </Section>
      </Content>
    </Container>
  )
}