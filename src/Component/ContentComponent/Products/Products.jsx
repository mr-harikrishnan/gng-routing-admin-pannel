import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";



function Products() {
  const {products}=useProducts()

  // const products = [{ "title": "Tasty Steel Towels", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/44.jpg", "price": "864.99", "instock": false, "description": "Our dolphin-friendly Bike ensures weighty comfort for your pets", "id": "1" }, { "title": "Fantastic Granite Tuna", "image": "https://avatars.githubusercontent.com/u/75037718", "price": "861.75", "instock": true, "description": "Discover the bleak new Mouse with an exciting mix of Gold ingredients", "id": "2" }, { "title": "Fantastic Steel Pizza", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/23.jpg", "price": "466.39", "instock": true, "description": "Innovative Shoes featuring wiggly technology and Rubber construction", "id": "3" }, { "title": "Handmade Rubber Shirt", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/16.jpg", "price": "43.95", "instock": true, "description": "The Donna Towels is the latest in a series of arid products from Hamill Inc", "id": "4" }, { "title": "Intelligent Metal Sausages", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/69.jpg", "price": "674.39", "instock": true, "description": "Professional-grade Shirt perfect for judicious training and recreational use", "id": "5" }, { "title": "Tasty Wooden Ball", "image": "https://avatars.githubusercontent.com/u/34874745", "price": "434.03", "instock": true, "description": "Discover the prestigious new Mouse with an exciting mix of Bamboo ingredients", "id": "6" }, { "title": "Fresh Concrete Cheese", "image": "https://avatars.githubusercontent.com/u/99151084", "price": "921.29", "instock": false, "description": "The Self-enabling directional model Mouse offers reliable performance and comfortable design", "id": "7" }, { "title": "Awesome Bronze Pants", "image": "https://avatars.githubusercontent.com/u/9038765", "price": "901.55", "instock": true, "description": "Featuring Fermium-enhanced technology, our Hat offers unparalleled shrill performance", "id": "8" }, { "title": "Elegant Marble Pants", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/82.jpg", "price": "210.15", "instock": false, "description": "Ergonomic Bike made with Bamboo for all-day puzzled support", "id": "9" }, { "title": "Intelligent Steel Gloves", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/40.jpg", "price": "360.92", "instock": true, "description": "The sleek and advanced Hat comes with black LED lighting for smart functionality", "id": "10" }, { "title": "Luxurious Rubber Chicken", "image": "https://avatars.githubusercontent.com/u/5133100", "price": "393.99", "instock": false, "description": "New Computer model with 42 GB RAM, 661 GB storage, and impressionable features", "id": "11" }, { "title": "Small Rubber Bacon", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/18.jpg", "price": "634.95", "instock": false, "description": "Handmade Shoes designed with Rubber for sniveling performance", "id": "12" }, { "title": "Awesome Concrete Bacon", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/4.jpg", "price": "17.09", "instock": false, "description": "Our gecko-friendly Soap ensures productive comfort for your pets", "id": "13" }, { "title": "Ergonomic Bamboo Ball", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/78.jpg", "price": "715.45", "instock": true, "description": "Discover the rabbit-like agility of our Chair, perfect for unkempt users", "id": "14" }, { "title": "Recycled Concrete Shoes", "image": "https://avatars.githubusercontent.com/u/55915049", "price": "114.69", "instock": true, "description": "Featuring Dubnium-enhanced technology, our Table offers unparalleled ornate performance", "id": "15" }, { "title": "Licensed Cotton Computer", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/7.jpg", "price": "317.53", "instock": false, "description": "Featuring Neon-enhanced technology, our Keyboard offers unparalleled overdue performance", "id": "16" }, { "title": "Soft Concrete Mouse", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/99.jpg", "price": "662.49", "instock": true, "description": "Discover the sea lion-like agility of our Computer, perfect for phony users", "id": "17" }, { "title": "Modern Granite Soap", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/30.jpg", "price": "556.55", "instock": false, "description": "Our rich-inspired Bike brings a taste of luxury to your huge lifestyle", "id": "18" }, { "title": "Soft Metal Shirt", "image": "https://avatars.githubusercontent.com/u/26406315", "price": "603.75", "instock": false, "description": "Introducing the Togo-inspired Chicken, blending jealous style with local craftsmanship", "id": "19" }, { "title": "Unbranded Silk Computer", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/92.jpg", "price": "993.39", "instock": false, "description": "Innovative Chicken featuring infamous technology and Steel construction", "id": "20" }, { "title": "Small Bronze Cheese", "image": "https://avatars.githubusercontent.com/u/57237360", "price": "34.59", "instock": true, "description": "New plum Salad with ergonomic design for breakable comfort", "id": "21" }, { "title": "Small Cotton Gloves", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/33.jpg", "price": "94.99", "instock": true, "description": "The Fully-configurable fresh-thinking matrix Pizza offers reliable performance and soggy design", "id": "22" }, { "title": "Luxurious Granite Mouse", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/54.jpg", "price": "649.39", "instock": false, "description": "New silver Table with ergonomic design for utter comfort", "id": "23" }, { "title": "Tasty Aluminum Chicken", "image": "https://avatars.githubusercontent.com/u/68014627", "price": "195.45", "instock": false, "description": "The turquoise Shirt combines South Georgia and the South Sandwich Islands aesthetics with Boron-based durability", "id": "24" }, { "title": "Unbranded Rubber Pants", "image": "https://avatars.githubusercontent.com/u/22060834", "price": "257.60", "instock": true, "description": "Discover the front new Gloves with an exciting mix of Concrete ingredients", "id": "25" }, { "title": "Fantastic Gold Chicken", "image": "https://avatars.githubusercontent.com/u/71589424", "price": "27.59", "instock": true, "description": "Ergonomic Gloves made with Metal for all-day new support", "id": "26" }, { "title": "Fantastic Metal Cheese", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/49.jpg", "price": "599.99", "instock": false, "description": "Stylish Gloves designed to make you stand out with ignorant looks", "id": "27" }, { "title": "Incredible Marble Hat", "image": "https://avatars.githubusercontent.com/u/47776323", "price": "504.57", "instock": false, "description": "Professional-grade Shirt perfect for hasty training and recreational use", "id": "28" }, { "title": "Sleek Bamboo Shirt", "image": "https://avatars.githubusercontent.com/u/72439723", "price": "438.59", "instock": false, "description": "Our dolphin-friendly Salad ensures courageous comfort for your pets", "id": "29" }, { "title": "Small Wooden Chicken", "image": "https://avatars.githubusercontent.com/u/60737278", "price": "710.75", "instock": true, "description": "The Gregoria Car is the latest in a series of blank products from Block, Daniel and Howe", "id": "30" }, { "title": "Fantastic Steel Pants", "image": "https://avatars.githubusercontent.com/u/93000384", "price": "971.80", "instock": false, "description": "Introducing the Antarctica-inspired Cheese, blending colorless style with local craftsmanship", "id": "31" }, { "title": "Fantastic Bronze Pizza", "image": "https://avatars.githubusercontent.com/u/73999462", "price": "786.75", "instock": true, "description": "Discover the tiger-like agility of our Fish, perfect for weighty users", "id": "32" }, { "title": "Awesome Wooden Hat", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/5.jpg", "price": "195.19", "instock": true, "description": "Innovative Chips featuring official technology and Wooden construction", "id": "33" }, { "title": "Incredible Aluminum Hat", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/66.jpg", "price": "419.39", "instock": true, "description": "Featuring Uranium-enhanced technology, our Hat offers unparalleled astonishing performance", "id": "34" }, { "title": "Refined Ceramic Shirt", "image": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/20.jpg", "price": "872.49", "instock": false, "description": "The Favian Hat is the latest in a series of dapper products from Schiller - Herman", "id": "35" }]

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
                    className={`text-nowrap  px-2 py-1 rounded-full text-xs font-medium ${product.instock === true
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                      }`}
                  >
                    {product.instock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="py-3 px-6">{product.description.slice(0,40)}...</td>
                <td className="py-3 px-6 ">
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
