import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const products = [
  {
    id: 101,
    name: "Nike Air Max",
    category: "Shoes",
    price: "$150",
    stock: "In Stock",
    addedDate: "2024-05-22",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9e02dd4-062b-4625-8166-bb066f68bc14/NIKE+AIR+MAX+1+%2786+OG+G.png",
  },
  {
    id: 102,
    name: "MacBook Pro",
    category: "Electronics",
    price: "$1999",
    stock: "Out of Stock",
    addedDate: "2024-04-10",
    image: "https://www.aptronixindia.com/pub/media/catalog/product/m/b/mbp-spacegray-select-202206-removebg-preview_1_.png",
  },
  {
    id: 103,
    name: "Samsung Galaxy S23",
    category: "Mobile",
    price: "$899",
    stock: "In Stock",
    addedDate: "2024-06-01",
    image: "data:image/jpeg;base64,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",
  },
];

function Products() {
  const [searchparam, setSearchParam] = useSearchParams();

  const setParam = (value) => {
    setSearchParam({ search: value });
  };

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
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Stock</th>
              <th className="py-3 px-6 text-left">Added Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-6 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded"
                    src={product.image}
                    alt="product"
                  />
                  <span>{product.name}</span>
                </td>
                <td className="py-3 px-6">{product.category}</td>
                <td className="py-3 px-6">{product.price}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock === "In Stock"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                      }`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="py-3 px-6">{product.addedDate}</td>
                <td className="py-3 px-6 text-center">
                  <Link to={`/product-view/${product.id}`}>
                    <button className="text-blue-600 hover:underline mr-3">
                      View
                    </button>
                  </Link>
                  <button className="text-yellow-600 hover:underline mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
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
