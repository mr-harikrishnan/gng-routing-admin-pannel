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
        validate: (values) => {

            let error = {}

            if (values.username === "") {
                error.username = "Please Enter username"
            }
            else if (values.username.length < 3) {
                error.username = "Username minimum 3 letters"

            }


            if (values.email === "") {
                error.email = "Please Enter email"
            }
            else if (!(/^\S+@\S+\.\S+$/.test(values.email))) {
                error.email = "Please enter valid email"
            }



            if (values.mobile === "") {
                error.mobile = "Please Enter mobile"
            }
            else if (values.mobile.length < 10 || values.mobile.length > 10) {
                error.mobile = "Mobile number should be 10 charecters"

            }
            else if (!(/^\d+$/.test(values.mobile))) {
                error.mobile = "Mobile number should be only numbers"

            }

            return error;

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
                            onBlur={formike.handleBlur}
                            placeholder="Enter Your Name"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formike.touched.username ? <span className=" max-w-xs block truncate text-red-500">{formike.errors.username}</span> : null}

                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formike.values.email}
                            onChange={formike.handleChange}
                            onBlur={formike.handleBlur}

                            placeholder="Enter Your Email"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formike.touched.email ? <span className=" max-w-xs block truncate text-red-500">{formike.errors.email}</span> : null}


                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-600 mb-1">Phone</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formike.values.mobile}
                            onChange={formike.handleChange}
                            onBlur={formike.handleBlur}

                            placeholder="Enter Your Mobile No"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formike.touched.mobile ? <span className=" max-w-xs block truncate text-red-500">{formike.errors.mobile}</span> : null}


                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-gray-600 mb-1">Country</label>
                        <select
                            name="country"
                            value={formike.values.country}
                            onChange={formike.handleChange}
                            onBlur={formike.handleBlur}

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
                            onBlur={formike.handleBlur}

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
                            onBlur={formike.handleBlur}

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
                            className={`mt-4  hover:bg-blue-700 ${!formike.isValid ? "bg-blue-400" : "bg-blue-600"} text-white font-semibold px-6 py-2 rounded shadow`}
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
