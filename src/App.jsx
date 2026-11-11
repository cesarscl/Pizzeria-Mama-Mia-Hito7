import { Routes, Route, Navigate } from "react-router-dom"
import { useUser } from "./context/UserContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

function App() {
  const { token } = useUser()

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Con sesión iniciada no se puede entrar a register ni login */}
        <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        {/* Ruta protegida: sin sesión redirige a login */}
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/404" element={<NotFound />} />
        {/* Cualquier ruta que no exista */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
