import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./index.scss"

function Axios() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      axios.get("https://northwind.vercel.app/api/categories")
      .then((x)=>setData(x.data))
      setIsLoading(false)
    }, [])
    
  return (
    <ul>
        {isLoading ? <div className='loading'></div> : data.map((x)=><li key={x.id}>{x.description}</li>)}
    </ul>
    

  )
}

export default Axios