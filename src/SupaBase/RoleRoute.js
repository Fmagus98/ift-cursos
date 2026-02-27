import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function RoleRoute({ children }) {
  const { user } = useAuth()
  const [role, setRole] = useState(null)

  useEffect(() => {
    const getRole = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single()

      setRole(data.role)
    }

    if (user) getRole()
  }, [user])

  if (role === null) return null
  if (role !== "admin") return <Navigate to="/home" />

  return children
}