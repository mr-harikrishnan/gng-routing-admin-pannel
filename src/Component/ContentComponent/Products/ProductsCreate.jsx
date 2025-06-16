import { useFormik } from "formik";
import React from "react";

function ProductCreate() {
    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            category: "shoes",
            brand: "nike",
            color: "red",
        },
        validate: (values) => {
            let error = {};

            if (values.title === "") {
                error.title = "Please enter product title";
            } else if (values.title.length < 3) {
                error.title = "Title must be at least 3 characters";
            }

            if (values.price === "") {
                error.price = "Please enter product price";
            } else if (!/^\d+(\.\d{1,2})?$/.test(values.price)) {
                error.price = "Enter a valid price";
            }

            return error;
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-5xl">
                <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Product Title */}
                    <div>
                        <label className="block text-gray-600 mb-1">Product Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter product name"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formik.touched.title ? <span className="text-red-500 block truncate">{formik.errors.title}</span> : null}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-600 mb-1">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter product price"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formik.touched.price ? <span className="text-red-500 block truncate">{formik.errors.price}</span> : null}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-600 mb-1">Category</label>
                        <select
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-600"
                        >
                            <option value="shoes">Shoes</option>
                            <option value="clothing">Clothing</option>
                            <option value="accessory">Accessory</option>
                        </select>
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="block text-gray-600 mb-1">Brand</label>
                        <select
                            name="brand"
                            value={formik.values.brand}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-600"
                        >
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="puma">Puma</option>
                        </select>
                    </div>

                    {/* Color */}
                    <div>
                        <label className="block text-gray-600 mb-1">Color</label>
                        <select
                            name="color"
                            value={formik.values.color}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-600"
                        >
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="black">Black</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-3 flex justify-center">
                        <button
                            type="submit"
                            className={`mt-4 hover:bg-blue-700 ${!formik.isValid ? "bg-blue-400" : "bg-blue-600"} text-white font-semibold px-6 py-2 rounded shadow`}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductCreate;
