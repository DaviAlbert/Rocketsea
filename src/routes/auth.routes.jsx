import {Routes, Route} from 'react-router-dom'
import {SignUp} from '../paginas/SignUp'
import {SignIn} from '../paginas/SignIn'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/" element={<SignUp/>}/>
        </Routes>
    )
}