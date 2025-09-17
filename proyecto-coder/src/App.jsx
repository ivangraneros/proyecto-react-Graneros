import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Productos from './components/Productos'
import Error from './components/Error'
import ItemListContainer from './components/ItemListContainer'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/productos' element={<ItemListContainer/>} />
            <Route path='/*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
