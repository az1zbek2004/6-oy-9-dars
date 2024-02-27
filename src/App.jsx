import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [data, setData] = useState(localStorage.getItem('data'))
  const [message, setMessage] = useState(localStorage.getItem('token'))

  return (
    <>
     <div className="app">
      <Routes>
        {
          data 
          ? 
          (token ? <Route exact path='/' element={<Home setMessage={setMessage}/>}/> : <Route exact path='/' element={<Login setData={setData} setToken={setToken}/>}/>) 
          :  
          (<Route exact path='/' element={<Signup setData={setData}/>}/>) 
        }
      </Routes>
     </div>
    </>
  )
}

export default App
