import { useUser } from "../context/UserContext"

// Por ahora el email es estático; la autenticación real se implementa en los siguientes hitos.
const Profile = () => {
  const email = "usuario@pizzeria.cl"
  const { logout } = useUser()

  return (
    <main className="container my-5" style={{ maxWidth: "480px" }}>
      <div className="card shadow-sm text-center">
        <div className="card-body py-4">
          <div className="display-4 mb-2">👤</div>
          <h2 className="h4 mb-3">Mi perfil</h2>
          <p className="text-secondary small mb-1">Email</p>
          <p className="fs-5 fw-semibold mb-4">{email}</p>
          <button className="btn btn-dark" onClick={logout}>🔒 Cerrar sesión</button>
        </div>
      </div>
    </main>
  )
}

export default Profile
