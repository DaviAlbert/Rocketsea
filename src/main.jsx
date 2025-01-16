import { Inicio } from './paginas/inicio'
import { SignUp } from './paginas/SignUp'
import { Detalhes } from './paginas/detalhes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'  // Importando o Router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>  {/* Envolvendo o conteúdo com BrowserRouter */}
        <SignUp/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)