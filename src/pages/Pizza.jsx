import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { API_URL, formatPrice, handleImgError } from "../utils/helpers"

const Pizza = () => {
  // id de la pizza tomado de la URL (/pizza/:id)
  const { id } = useParams()
  // Se guarda junto al id consultado, para no mostrar la pizza anterior al cambiar de URL
  const [result, setResult] = useState({ id: null, pizza: null, error: "" })
  const { addToCart } = useCart()

  // Consume la API cada vez que cambia el id
  useEffect(() => {
    let ignore = false
    const getPizza = async () => {
      try {
        const res = await fetch(`${API_URL}/api/pizzas/${id}`)
        if (res.status === 404) throw new Error("Pizza no encontrada.")
        if (!res.ok) throw new Error("No se pudo cargar la pizza. Revisa que el backend esté levantado.")
        const data = await res.json()
        if (!ignore) setResult({ id, pizza: data, error: "" })
      } catch (err) {
        const message = err instanceof TypeError ? "No se pudo cargar la pizza. Revisa que el backend esté levantado." : err.message
        if (!ignore) setResult({ id, pizza: null, error: message })
      }
    }
    getPizza()
    return () => {
      ignore = true
    }
  }, [id])

  if (result.id !== id) {
    return <p className="container my-5 text-center text-secondary">Cargando pizza...</p>
  }

  if (result.error) {
    return (
      <main className="container my-5 text-center">
        <div className="alert alert-danger">{result.error}</div>
        <Link to="/" className="btn btn-dark">Volver al inicio</Link>
      </main>
    )
  }

  const { pizza } = result

  return (
    <main className="container my-5">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-12 col-md-5">
            <img
              src={pizza.img}
              alt={`Pizza ${pizza.name}`}
              className="img-fluid rounded-start w-100 h-100"
              style={{ objectFit: "cover", minHeight: "280px" }}
              onError={handleImgError(pizza.id)}
            />
          </div>
          <div className="col-12 col-md-7">
            <div className="card-body d-flex flex-column h-100">
              <h2 className="card-title text-capitalize">Pizza {pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>

              <p className="text-secondary small mb-1">Ingredientes:</p>
              <ul className="small ps-3">
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>🍕 {ingredient}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <p className="fs-4 fw-bold mb-0">Precio: ${formatPrice(pizza.price)}</p>
                <button className="btn btn-dark" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pizza
