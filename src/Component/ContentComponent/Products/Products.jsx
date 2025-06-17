import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import axios from "axios";



function Products() {
  const { products, getData } = useProducts()


  const [searchparam, setSearchParam] = useSearchParams();


  const setParam = (value) => {
    setSearchParam({ search: value });
  };

  let deleteProduct = async (id) => {
    try {
      let permission = window.confirm("Are you sure delete this content")
      if (permission) {
        await axios.delete(`https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products/${id}`)
        getData()
      }



    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to={"/product-create"}>
        <div className="p-4 flex justify-end">
          <button className="border-2 border-gray-400 px-2 bg-[#3ecc72] rounded text-white font-semibold cursor-pointer">
            Product Create +
          </button>
        </div>
      </Link>




      {/* search box */}
      <div className="p-4 flex justify-around">
        <div>
          <input
            onChange={(e) => setParam(e.target.value)}
            type="text"
            placeholder="search product"
            className="border w-[60rem] py-1 px-2 rounded bg-slate-200"
          />
        </div>
        <div>
          <button className="border-2 py-1 px-2 bg-blue-500 rounded text-white font-semibold cursor-pointer">
            Search
          </button>
        </div>
      </div>




      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Stock</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-3 px-6 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded"
                    src={product.image}
                    alt="product" />
                  <span>{product.title}</span>
                </td>
                <td className="py-3 px-6">{product.price}</td>
                <td className="py-3 px-6 " >
                  <span
                    className={`text-nowrap  px-2 py-1 rounded-full text-xs font-medium ${product.instock == true
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                      }`}
                  >
                    {product.instock === true ? "In Stock" : "Out of Stock"}

                  </span>
                </td>
                <td className="py-3 px-6">{product.description.slice(0, 40)}...</td>
                <td className="py-3 px-6 ">
                  <Link to={`/product-view/${product.id}`}>
                    <button className="text-blue-600 hover:underline mr-3">
                      View
                    </button>
                  </Link>
                  <Link to={`/product-edit/${product.id}`}>
                    <button className="text-yellow-600 hover:underline mr-3">
                      Edit
                    </button>
                  </Link>

                  <button onClick={() => {
                    deleteProduct(product.id)
                  }} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
