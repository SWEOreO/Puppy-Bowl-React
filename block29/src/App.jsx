import { useEffect, useState } from 'react'
import { Link, Route,Routes, useNavigate } from 'react-router-dom'

import AllPlayer from './components/AllPlayers.jsx'
import NewPlayerForm from './components/NewPlayerForm.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));


  return (
    <>
      <h1>Welcome to Puppy Bowl!!!</h1>

      <Routes>
        <Route path='/' element={<AllPlayer token={token}/>}/>
        <Route path='/SinglePlayer/:id' element={<SinglePlayer token={token}/>}/>
        <Route path='/NewPlayerForm' element={<NewPlayerForm setToken={setToken}/>}/>
      </Routes>
    </>
  )
}

export default App
