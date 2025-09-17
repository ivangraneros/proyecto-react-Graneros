import { Link, Outlet} from "react-router-dom"
import './style.css'

function Layout() {
  return (
    <>
        <nav className="navbar">
            <ul>
                <li>
                    <Link to = {"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to = {"/productos"} >Productos</Link>
                </li>
                <li>
                    <Link to = {"/nosotros"} >Nosotros</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Layout