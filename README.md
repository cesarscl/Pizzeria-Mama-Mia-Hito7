# Pizzería Mamma Mia!

Hito 7 - React Router II | Desafío Latam - Fullstack JS

## Accesos

- **Demo (Vercel):** [pizzeria-mama-mia-hito7.vercel.app](https://pizzeria-mama-mia-hito7.vercel.app/)
- **Backend / API (Render):** [pizzeria-backend-laiv.onrender.com/api/pizzas](https://pizzeria-backend-laiv.onrender.com/api/pizzas)
- **Repositorio:** [cesarscl/Pizzeria-Mama-Mia-Hito6](https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito6)

> El backend está en el plan gratuito de Render y podría estar inactivo al momento de la evaluación: la primera carga puede tardar cerca de un minuto.

## Hito 7: useParams y rutas protegidas

- [x] **Pizza** obtiene el `id` con `useParams` (`/pizza/:id`) y consulta `GET /api/pizzas/:id`. El botón **Ver Más** de cada tarjeta lleva a su pizza.
- [x] `UserContext` guarda el `token` simulado (por defecto `true`) y el método `logout`, que lo deja en `false`.
- [x] El **Navbar** usa el contexto: con token muestra Profile y Logout (que ejecuta `logout`); sin token, Login y Register. Home y Total siempre visibles.
- [x] En **Cart**, el botón Pagar se deshabilita si el token es `false`.
- [x] `/profile` es una ruta protegida: sin token redirige a `/login`. Con token, `/login` y `/register` redirigen a `/`.

> Para volver a tener sesión después del logout, recarga la página: el token vuelve a `true`.

## Hitos anteriores

| Hito | Contenido |
|---|---|
| 1 | Componentes y props: Navbar, Header, CardPizza y Footer |
| 2 | Formularios de Register y Login con validaciones (`useState`) |
| 3 | Menú con `.map()` y carrito con `+` / `-` y total |
| 4 | Pizzas desde la API con `useEffect` y `fetch` (Home y detalle `p001`) |
| 5 | Rutas con React Router, carpeta `pages`, Profile y NotFound |
| 6 | Carrito global con Context API (`CartContext`): añadir, `+` / `-` / 🗑 y mismo total en Navbar y Cart |

## Rutas

| Ruta | Página |
|---|---|
| `/` | Home |
| `/register` | Register (sin token) |
| `/login` | Login (sin token) |
| `/cart` | Cart |
| `/pizza/:id` | Pizza (ej. `/pizza/p001` … `/pizza/p006`) |
| `/profile` | Profile (requiere token) |
| `/404` y rutas inexistentes | NotFound |

## Estructura

```
src/
├── main.jsx        → UserProvider > CartProvider > BrowserRouter > App
├── App.jsx         → Navbar + Routes (con rutas protegidas) + Footer
├── components/     → Navbar, Header, CardPizza, Message, Footer
├── context/        → CartContext.js + CartProvider.jsx, UserContext.js + UserProvider.jsx
├── pages/          → Home, Pizza, Register, Login, Cart, Profile, NotFound
├── utils/helpers.js
└── pizzas.js
```

## Cómo correrlo en local

```bash
git clone https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito6.git
cd Pizzeria-Mama-Mia-Hito6
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173). Por defecto usa el backend de Render; para usar el backend local del material de apoyo (`npm start`, puerto 5000), crea un archivo `.env.local` con `VITE_API_URL=http://localhost:5000`.

## Notas

- Las imágenes del material de apoyo (Firebase) responden error 402; se reemplazan por fotos de [Unsplash](https://unsplash.com/).
- `vercel.json` permite entrar directo o recargar en cualquier ruta en Vercel.

## Tecnologías

React 19 · Vite · React Router 7 · Bootstrap 5

## Autor

Cesar Ormeño — Desafío Latam, Fullstack JS, Módulo 04
