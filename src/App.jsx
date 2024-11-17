import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ClientLayout from './Pages/ClientLayout'
import Login from './Pages/Login'
import Projects from './Pages/Projects'
import NewProjects from './Pages/NewProjects'
import SignUp from './Pages/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ClientLayout />}>
          <Route path="/dashboard/projects" element={<Projects />} />
          <Route path="/dashboard/new-projects" element={<NewProjects />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
