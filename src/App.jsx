import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Component/Parent'
import Conter from './Component/Conter'
import FocusInput from './Component/FocusInput'
import ClassTimer from './Component/ClassTimer'
import HookTimer from './Component/HookTimer'
// import { ThemContextProviderPropbs } from './Component/contex/ThemeContext'
import Box from './Component/contex/Box'
import Sun from './Component/Cont/Sun'
import Mon from './Component/Cont/Moon.jsx'
import Earth from './Component/Cont/Earth.jsx'
import { myContext } from './Component/Contextfile/Context.jsx'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
// import { MycontextProvider } from './Component/Contextfile/Context.jsx'
import PageNotFount from './Component/Cont/PageNotFount.jsx'
import CountReducer from './Component/reducer/CountReducer.jsx'
import ClassFile from '../class/ClassFile.jsx'
import LifeCycle from './Component/Fun/LifeCycle.jsx'
import Lazy from './Component/Last/Lazy.jsx'

function App() {
  const [state,setState]=useState(0)


  return (
    <>

    {/* <Parent></Parent> */}
    {/* <Conter/> */}
    {/* <FocusInput/> */}
    {/* <ClassTimer/>
    <HookTimer/> */}

    
  
    {/* <myContext.Provider value={{state,setState}}>
    <Router>
      <Routes>
      <Route path='/' Component={Sun}></Route>
      <Route path='/moon' Component={Mon}></Route>
      <Route path='/earth' Component={Earth}></Route>
      <Route path='*' Component={PageNotFount}></Route>
      </Routes>
    </Router>
    </myContext.Provider> */}

    {/* <CountReducer/> */}
    {/* <ClassFile/> */}
    {/* <LifeCycle/> */}

    <Lazy/>
    
  

      
    </>
  )
}

export default App
