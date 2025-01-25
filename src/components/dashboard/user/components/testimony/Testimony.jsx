import { HomeIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../admin/components/userview/components/css.css";
React;
export default function UTestimony() {
  const [test, setTest] = useState([]);
  const [editingTest, setEditingTest] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    testimony: "",
  });

  // Fetch users from API
  useEffect(() => {
    const fetchTestimony = async () => {
      try {
        const response = await axios.get(
          "https://shopsnodejs.onrender.com/testimony"
        );
        setTest(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching testimony:", error);
      }
    };

    fetchTestimony();
  }, []);

  // Delete user
  const handleDelete = async (userId) => {
    try {
      if (window.confirm("Do you really want to Delete?")) {
        await axios.delete(
          `https://shopsnodejs.onrender.com/testimony/${userId}`
        );
        setTest(test.filter((user) => user._id !== userId));
      } else {
        alert("Error in delete");
      }
    } catch (error) {
      console.error("Error deleting testimony:", error);
      alert("Error deleting testimony:", error);
    }
  };

  // Handle edit
  const handleEdit = (testimonies) => {
    setEditingTest(testimonies._id);
    setFormData({
      email: testimonies.email,
      name: testimonies.name,
      testimony: testimonies.testimony,
    });
  };

  // Update user
  const handleUpdate = async (userId) => {
    try {
      if (window.confirm("Do you really want to Update?")) {
        await axios.put(
          `https://shopsnodejs.onrender.com/testimony/${userId}`,
          formData
        );
        setTest(
          test.map((user) =>
            user._id === userId ? { ...user, ...formData } : user
          )
        );
        setEditingTest(null);
      } else {
        alert("Error in Updating ");
      }
    } catch (error) {
      console.error("Error updating testimony:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(test[0]);

  return (
    <>
      <div className="title"></div> 
      <div className="w-full">
        <div className="relative overflow-hidden bg-gray-100">
          <div className=" fixed top right-4">
            <Link to={"/Udashboard"}>
              <button>
                <HomeIcon className="size-4" />
              </button>
            </Link>
          </div>
          <h2 className="text-blue-400 font-bold">TESTIMONY</h2>
          {test && test.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="rounded-lg text-base text-blue-400 font-semibold w-full">
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Name
                    </th>

                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      testimony
                    </th>

                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {test.map((mony) => (
                    <tr key={mony._id} className="border-t">
                      {editingTest === mony._id ? (
                        <>
                          <td>{mony._id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full border p-1"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full border p-1"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <input
                              type="text"
                              name="testimony"
                              value={formData.testimony}
                              onChange={handleInputChange}
                              className="w-full border p-1"
                            />
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <button
                              className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleUpdate(mony._id)}
                            >
                              Save
                            </button>
                            <button
                              className="bg-gray-500 text-white px-2 py-1 rounded"
                              onClick={() => setEditingTest(null)}
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {mony._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {mony.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {mony.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {mony.testimony}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <button
                              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleEdit(mony)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 text-white px-2 py-1 rounded"
                              onClick={() => handleDelete(mony._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-red-500 font-bold p-6"> No testimony found.</p>
          )}
        </div>
      </div>
      <br />
    </>
  );
}
