import { useFormik } from "formik";
import React from "react";

function UserCreate() {
    const formike = useFormik({
        initialValues: {
            username: "",
            email: "",
            mobile: "",
            country: "JP",
            state: "KL",
            city: "MD",
        },
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-5xl">
                <form onSubmit={formike.handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-600 mb-1">User Name</label>
                        <input
                            type="text"
                            name="username"
                            value={formike.values.username}
                            onChange={formike.handleChange}
                            placeholder="Enter Your Name"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formike.values.email}
                            onChange={formike.handleChange}
                            placeholder="Enter Your Email"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-600 mb-1">Phone</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formike.values.mobile}
                            onChange={formike.handleChange}
                            placeholder="Enter Your Mobile No"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-gray-600 mb-1">Country</label>
                        <select
                            name="country"
                            value={formike.values.country}
                            onChange={formike.handleChange}
                            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-600"
                        >
                            <option disabled value="">Select Your Country</option>
                            <option value="IN">India</option>
                            <option value="JP">Japan</option>
                        </select>
                    </div>

                    {/* State */}
                    <div>
                        <label className="block text-gray-600 mb-1">State</label>
                        <select
                            name="state"
                            value={formike.values.state}
                            onChange={formike.handleChange}
                            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-600"
                        >
                            <option disabled value="">Select Your State</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="KL">Kerala</option>
                        </select>
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-gray-600 mb-1">City</label>
                        <select
                            name="city"
                            value={formike.values.city}
                            onChange={formike.handleChange}
                            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-600"
                        >
                            <option disabled value="">Select Your City</option>
                            <option value="CH">Chennai</option>
                            <option value="MD">Madurai</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-3 flex justify-center">
                        <button
                            type="submit"
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserCreate;
