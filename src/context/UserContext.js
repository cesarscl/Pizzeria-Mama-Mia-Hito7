import { createContext, useContext } from "react"

// Contexto global del usuario (el estado vive en UserProvider)
export const UserContext = createContext()

export const useUser = () => useContext(UserContext)
