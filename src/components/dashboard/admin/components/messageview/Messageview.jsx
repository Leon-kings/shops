import axios from "axios";
import React, { useEffect, useState } from "react";
React;
import "../userview/components/css.css";
export default function Messageview() {
  const [message, setMessage] = useState([]);
  const [editingMessage, setEditingMessage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  // Fetch message from API
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          "https://backendproject-8m9r.onrender.com/message"
        );
        setMessage(response.data.data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);

  // Delete msg
  const handleDelete = async (msgId) => {
    try {
      if (window.confirm("Do you really want to Delete?")) {
        await axios.delete(
          `https://backendproject-8m9r.onrender.com/message/${msgId}`
        );
        setMessage(message.filter((msg) => msg._id !== msgId));
      } else {
        alert("Error in delete");
      }
    } catch (error) {
      console.error("Error deleting msg:", error);
      alert("Error deleting msg:", error);
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

  // Update msg
  const handleUpdate = async (msgId) => {
    try {
      if (window.confirm("Do you really want to Update?")) {
        await axios.put(
          `https://backendproject-8m9r.onrender.com/message/${msgId}`,
          formData
        );
        setMessage(
          message.map((msg) =>
            msg._id === msgId ? { ...msg, ...formData } : msg
          )
        );
        setEditingMessage(null);
      } else {
        alert("Error in Updating ");
      }
    } catch (error) {
      console.error("Error updating msg:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(message[0]);
  return (
    <>
      <div className="title">
        <br />
      </div>
      <div className="bg-white rounded-md">
        <div className="relative overflow-hidden bg-gray-100 min-h-screen ">
          <h4>Messages</h4>
          {message.length > 0 ? (
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
                  {message.map((msg) => (
                    <tr key={msg._id} className="border-t">
                      {editingMessage === msg._id ? (
                        <>
                          <td>{msg._id}</td>

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
                              onClick={() => handleUpdate(msg._id)}
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
                            {msg._id}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {msg.email}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {msg.message}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <button
                              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleEdit(msg)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 text-white px-2 py-1 rounded"
                              onClick={() => handleDelete(msg._id)}
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
            <p className="text-red-500"> No Message found.</p>
          )}
        </div>
      </div>
    </>
  );
}
