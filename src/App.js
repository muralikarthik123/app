import React from 'react'
import Start from './start/start.jsx'
import Home from './home/home.jsx'
import Cal from './calculator/cal.jsx'
import Subsidy from './subsidy/subsidy.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cal' element={<Cal/>}/>
          <Route path='/sub' element={<Subsidy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
