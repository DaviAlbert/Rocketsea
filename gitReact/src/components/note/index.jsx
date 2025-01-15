import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.name} title={tag.name} />) //Map é uma estrutura de repetição. Ele percorre todos os itens de uma lista. O map "recebe" uma lsita e endereça eles par cada devido item(+/- pareceido com um json). FOREACH não retorna nada por pardrão, o map sim, sendo usado para devolver uam nova repetição(elementos).
          }
        </footer>
      }
    </Container>
  )
}