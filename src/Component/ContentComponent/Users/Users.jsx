import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Hari Krishnan",
    email: "hari.dev@email.com",
    role: "Admin",
    status: "Active",
    joinDate: "2024-03-12",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 2,
    name: "Anjali Ramesh",
    email: "anjali.r@email.com",
    role: "User",
    status: "Inactive",
    joinDate: "2023-11-04",
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: 3,
    name: "Karthik Kumar",
    email: "karthik.k@email.com",
    role: "Moderator",
    status: "Active",
    joinDate: "2024-01-18",
    avatar: "https://i.pravatar.cc/150?img=35",
  },
];


function Users() {

  const [searchparam, setSearchParam] = useSearchParams()
  searchparam.forEach((key, value) => {
    console.log(key, value);
  })

  // //Manual setParam
  // setSearchParam("name=harikrishnan");


  // Auto set param
  const setParam = (value) => {
    setSearchParam(value);
  };



  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to={"/user-create"}><div className=" p-4 flex justify-end">
        <button className="border-2 border-gray-400 px-2 bg-[#3ecc72] rounded text-white font-semibold cursor-pointer">
          User Create +
        </button>
      </div></Link>

      {/* search box */}

      <div className=" p-4 flex justify-around">

        <div>
          <input
            onChange={(e) => {

              setParam(e.target.value);

            }}
            type="text"
            placeholder="search user"
            className="border w-[60rem] py-1 px-2 rounded bg-slate-200"
          />
        </div>
        <div>
          <button className="border-2  py-1 px-2 bg-blue-500 rounded text-white font-semibold cursor-pointer ">Search</button>
        </div>

      </div>


      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Join Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition "
              >
                <td className="py-3 px-6 flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.avatar}
                    alt="avatar"
                  />
                  <span>{user.name}</span>
                </td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">{user.role}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                      }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-6">{user.joinDate}</td>
                <td className="py-3 px-6 text-center">
                  <Link to={`/veiw/${user.id}`}><button className="text-blue-600 hover:underline mr-3">
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

export default Users;
