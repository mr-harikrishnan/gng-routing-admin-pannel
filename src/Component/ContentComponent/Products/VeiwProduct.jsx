import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VeiwProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    let getData = async () => {
        const productData = await axios.get(
            `https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products/${id}`
        )
        setProduct(productData.data)
    }

    useEffect(() => {
        getData()
    }, [])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex items-center justify-center flex-col">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
        </div>
    )
}

export default VeiwProduct
