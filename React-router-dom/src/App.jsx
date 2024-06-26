
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { Topbar } from './components/Topbar'

function App() {

  return (
    <>
      <Topbar/>
      <BrowserRouter>
        <Routes> 
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
