import { useState } from "react"
import { UserContext } from "./UserContext"

const UserProvider = ({ children }) => {
  // Token simulado: por defecto hay una sesión iniciada
  const [token, setToken] = useState(true)

  const logout = () => setToken(false)

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
