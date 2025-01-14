import { HomeIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
React;
export default function Subscription() {
  const [subsc, setSubscription] = useState([]);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
  });

  // Fetch Subscription from API
  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(
          "https://shopsnodejs.onrender.com/subscription"
        );
        setSubscription(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching Subscription:", error);
      }
    };

    fetchSubscription();
  }, []);

  // Delete Subscription
  const handleDelete = async (userId) => {
    try {
      if (window.confirm("Do you really want to Delete?")) {
        await axios.delete(
          `https://shopsnodejs.onrender.com/subscription/${userId}`
        );
        setSubscription(subsc.filter((user) => user._id !== userId));
      } else {
        alert("Error in delete");
      }
    } catch (error) {
      console.error("Error deleting Subscription:", error);
      alert("Error deleting Subscription:", error);
    }
  };

  // Handle edit
  const handleEdit = (user) => {
    setEditingSubscription(user._id);
    setFormData({
      email: user.email,
    });
  };

  // Update subscription
  const handleUpdate = async (userId) => {
    try {
      if (window.confirm("Do you really want to Update?")) {
        await axios.put(
          `https://shopsnodejs.onrender.com/subscription/${userId}`,
          formData
        );
        setSubscription(
          subsc.map((user) =>
            user._id === userId ? { ...user, ...formData } : user
          )
        );
        setEditingSubscription(null);
      } else {
        alert("Error in Updating ");
      }
    } catch (error) {
      console.error("Error updating Subscription:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(subsc[0]);

  return (
    <>
      <div>
        <div className="title"></div>
        <div className="relative overflow-hidden bg-gray-100 ">
          <div className=" fixed top right-4">
            <Link to={"/Dashboard"}>
              <button>
                <HomeIcon className="size-4" />
              </button>
            </Link>
          </div>
          {subsc && subsc.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200">
                <thead className="rounded-lg text-base text-blue-400 font-semibold w-full">
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {subsc.map((user) => (
                    <tr key={user._id} className="border-t">
                      {editingSubscription === user._id ? (
                        <>
                          <td>{user._id}</td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full border p-1"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <button
                              className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleUpdate(user._id)}
                            >
                              Save
                            </button>
                            <button
                              className="bg-gray-500 text-white px-2 py-1 rounded"
                              onClick={() => setEditingSubscription(null)}
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user._id}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user.email}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <button
                              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleEdit(user)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 text-white px-2 py-1 rounded"
                              onClick={() => handleDelete(user._id)}
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
            <p className="text-red-500 font-bold p-6">
              {" "}
              No subscription found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
