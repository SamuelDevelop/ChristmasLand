import './css/fonts.css'
import './css/base.css'
import './css/invites.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Registration from './pages/logins/Registration'
import Login from './pages/logins/Login'
import Logout from './pages/logins/Logout'
import Store from './pages/store/Store'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  )
}

export default App

