import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Brand = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 75px;
  margin: 5px;
  border-radius: 5px;

  >h1{
    font-size: 24px;
    color:${({ theme }) => theme.COLORS.ORANGE};
  }
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;
  >li{
    margin-bottom: 24px;
  }
`
export const Search = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  >img{
    width: 130px;
  }
`
export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const NewNote = styled(Link)`
  grid-area: newnote;
  background-color:${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    margin-right: 8px;
  }
`