import {Routes, Route} from 'react-router-dom'
import {Inicio} from '../paginas/inicio'
import {Detalhes} from '../paginas/detalhes'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/detalhes" element={<Detalhes/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
        </Routes>
    )
}