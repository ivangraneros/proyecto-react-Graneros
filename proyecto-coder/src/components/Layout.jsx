import { Link, Outlet} from "react-router-dom"

function Layout() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to = {"/"} >Inicio</Link>
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
    </div>
  )
}

export default Layout