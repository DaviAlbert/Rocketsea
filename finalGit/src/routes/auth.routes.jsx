import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../paginas/SignIn'
import { SignUp } from '../paginas/SignUp'


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  )
}