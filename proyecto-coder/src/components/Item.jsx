import ItemList from './ItemList'
import { useState, useEffect } from 'react'

function Item() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=60')
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.error(err))
    }, [])

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default Item