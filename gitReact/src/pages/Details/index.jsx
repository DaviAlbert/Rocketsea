import { Container, Links, Content } from "./styles"
import { Header } from "../../components/header";
import { Button } from "../../components/Button";
import { ButtonText } from '../../components/ButtonText'
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";

export function Details() {
  return (
    <Container>
      <Header/>
      <main>
         <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aspernatur iusto nisi fugit aliquid atque velit ab necessitatibus tempore, at commodi quasi hic possimus vel, minus alias excepturi, dolores soluta.</p>
          <Section title="Links úteis">
          <Links>
            <li><a href="#">https://rocketseat.com.br</a></li>
            <li><a href="#">https://rocketseat.com.br</a></li>
          </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Teste"/>
          </Section>
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}