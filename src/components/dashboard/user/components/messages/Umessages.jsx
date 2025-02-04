import { HomeIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
React;
export default function Umessages() {
  const [message, setMessage] = useState([]);
  const [editingMessage, setEditingMessage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  // Fetch users from API
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          "https://shopsnodejs.onrender.com/messages"
        );
        setMessage(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);

  // Delete user
  const handleDelete = async (userId) => {
    try {
      if (window.confirm("Do you really want to Delete?")) {
        await axios.delete(
          `https://shopsnodejs.onrender.com/messages/${userId}`
        );
        setMessage(message.filter((user) => user._id !== userId));
      } else {
        alert("Error in delete");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Error deleting message:", error);
    }
  };

  // Handle edit
  const handleEdit = (msg) => {
    setEditingMessage(msg._id);
    setFormData({
      email: msg.email,
      message: msg.message,
    });
  };

  // Update user
  const handleUpdate = async (userId) => {
    try {
      if (window.confirm("Do you really want to Update?")) {
        await axios.put(
          `https://shopsnodejs.onrender.com/messages/${userId}`,
          formData
        );
        setMessage(
          message.map((userMsg) =>
            userMsg._id === userId ? { ...userMsg, ...formData } : userMsg
          )
        );
        setEditingMessage(null);
      } else {
        alert("Error in Updating ");
      }
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="title"></div>
      <div className="w-full">
        <div className="relative overflow-hidden bg-gray-100 ">
          <div className="fixed right-4">
            <Link to={"/Udashboard"}>
              <button>
                <HomeIcon className="size-4" />
              </button>
            </Link>
          </div>
          <h2 className="text-blue-400 font-bold">MESSAGES</h2>
          {message && message.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="rounded-lg text-base text-blue-400 font-semibold w-full">
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      ID
                    </th>

                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      message
                    </th>

                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {message.map((user) => (
                    <tr key={user._id} className="border-t">
                      {editingMessage === user._id ? (
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
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <input
                              type="message"
                              name="message"
                              value={formData.message}
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
                              onClick={() => setEditingMessage(null)}
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
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user.message}
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
            <p className="text-red-500 font-bold p-6"> No message found.</p>
          )}
        </div>
      </div>
      <br />
    </>
  );
}

