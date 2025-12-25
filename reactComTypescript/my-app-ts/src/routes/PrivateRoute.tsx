import { ReactNode, FC } from "react"
import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
    children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuth = localStorage.getItem("auth") === "true"
    return isAuth ? <>{children}</> : <Navigate to='/login' replace/>
    
}