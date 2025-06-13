import React from 'react'
import { useParams } from 'react-router-dom'

function Veiw() {
  {
    const {id}=useParams()
    return (
    <div>V{id}</div>
  )
  }
  
}

export default Veiw