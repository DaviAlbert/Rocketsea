import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'  // Importando o Router
import { AppRoutes } from "./routes/app.routes";
import { AuthRoutes } from "./routes/auth.routes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>  {/* Envolvendo o conteúdo com BrowserRouter */}
      <AuthRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)