import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'

import { Home, Layout, About, Contact, Register, Login } from './index.js'

const routes = createRoutesFromElements(
<Route path="/" Component={Layout}>
    <Route index Component={Home}/>
    <Route path="about" Component={About}/>
    <Route path="contact" Component={Contact}/>
    <Route path="register" Component={Register}/>
    <Route path="login" Component={Login}/>
</Route>)

const router = createHashRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
