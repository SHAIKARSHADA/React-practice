
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from React.lazy(() => './components/Dashboard' ) 
import Landing from React.lazy(() => './components/Landing' )
import { Topbar } from './components/Topbar'

function App() {

  return (
    <>
     
      <BrowserRouter>
        <Topbar/>
        <Routes> 
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
