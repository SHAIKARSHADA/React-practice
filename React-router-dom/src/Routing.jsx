import { Suspense,lazy } from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
const Dashboard = lazy(() => import('./components/Dashboard')) 
const Landing = lazy(() => import('./components/Landing'))
import { Topbar } from './components/Topbar'

function App() {

  return (
    <>
     
      <BrowserRouter>
        <Topbar/>
        <Routes> 
        <Route path="/dashboard" element={<Suspense fallback={"loading...."}><Dashboard></Dashboard></Suspense>}></Route>
        <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
