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
        <div className="w-full flex justify-center">

            <div className='flex items-center justify-center flex-col w-90 '>
                <img className='mt-10 w-72 h-72 border-2 p-4 rounded-lg' src={product.image} alt={product.title} />
                <h1 className='font-bold m-4'>{product.title}</h1>
                <p>{product.description}</p>
            </div>

        </div>
    )
}

export default VeiwProduct
