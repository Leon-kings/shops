import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";
React;
import "../userview/components/css.css";
export default function Testimonyview() {
  const [testimony, setTestimony] = useState([]);
  const [editingTestimony, setEditingTestimony] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    testimony: "",
    name:""
  });

  // Fetch testimony from API
  useEffect(() => {
    const fetchtestimony = async () => {
      try {
        const response = await axios.get(
          "https://shopsnodejs.onrender.com/testimony"
        );
        setTestimony(response.data.data);
      } catch (error) {
        console.error("Error fetching testimony:", error);
      }
    };

    fetchtestimony();
  }, []);

  // Delete testimony
  const handleDelete = async (testimonyId) => {
    try {
      if (window.confirm("Do you really want to Delete?")) {
        await axios.delete(
          `https://shopsnodejs.onrender.com/testimony/${testimonyId}`
        );
        setTestimony(testimony.filter((testimony) => testimony._id !== testimonyId));
      } else {
        alert("Error in delete");
      }
    } catch (error) {
      console.error("Error deleting testimony:", error);
      alert("Error deleting testimony:", error);
    }
  };

  // Handle edit
  const handleEdit = (testimony) => {
    setEditingTestimony(testimony._id);
    setFormData({
      email: testimony.email,
      name:testimony.name,
      testimony: testimony.testimony,
    });
  };

  // Update testimony
  const handleUpdate = async (testimonyId) => {
    try {
      
        await axios.put(
          `https://shopsnodejs.onrender.com/testimony/${testimonyId}`,
          formData
        );
        setTestimony(
          testimony.map((testimony) =>
            testimony._id === testimonyId ? { ...testimony, ...formData } : testimony
          )
        );
        setEditingTestimony(null);
  
    } catch (error) {
      console.error("Error updating testimony:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(testimony[0]);
  return (
    <>
      <div className="title">
        <br />
      </div>
      <div className="container bg-white rounded-md">
      <div className="relative overflow-hidden bg-gray-100 min-h-screen ">
          <h4>Testimony</h4>
          {testimony.length > 0 ? (
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
                  {testimony.map((testimony) => (
                    <tr key={testimony._id} className="border-t">
                      {editingTestimony === testimony._id ? (
                        <>
                          <td>{testimony._id}</td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <input
                              type="name"
                              name="text"
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
                              type="testimony"
                              name="testimony"
                              value={formData.testimony}
                              onChange={handleInputChange}
                              className="w-full border p-1"
                            />
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <button
                              className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleUpdate(testimony._id)}
                            >
                              Save
                            </button>
                            <button
                              className="bg-gray-500 text-white px-2 py-1 rounded"
                              onClick={() => setEditingTestimony(null)}
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {testimony._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {testimony.name}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {testimony.email}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {testimony.testimony}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <button
                              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleEdit(testimony)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 text-white px-2 py-1 rounded"
                              onClick={() => handleDelete(testimony._id)}
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
            <p className="text-red-500"> No Testimony found.</p>
          )}
        </div>
        <Link to={'/dashboard'}>
      <button><BsHouse/></button>
      </Link>
      </div>
    </>
  );
}
