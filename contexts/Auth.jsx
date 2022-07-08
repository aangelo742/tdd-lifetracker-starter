import { createContext, useContext, useState, useEffect } from "react"
import apiClient from "../lifetracker-ui/services/apiClient"

const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
          const { data, error } = await apiClient.fetchUserFromToken()
          if (data) setUser(data.user)
          if (error) setError(error)
        }
    
        const token = localStorage.getItem("life_tracker_token")
        if (token) {
          apiClient.setToken(token)
          fetchUser()
        }
      }, [])
      
    const authValue = {user, setUser}

    return (
        <AuthContext.Provider value={authValue}>
            <>
                {children}
            </>
        </AuthContext.Provider>
    )

}

export const useAuthContext = () => useContext(AuthContext)