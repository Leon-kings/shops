import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";
React;
import "../userview/components/css.css";
import { HomeIcon } from "@heroicons/react/16/solid";
export default function Testimonyview() {
  const [testimonies, setTestimonies] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    testimony: "",
  });
  const [editingTestimonyId, setEditingTestimonyId] = useState(null);

  // Fetch testimonies from API
  useEffect(() => {
    const fetchTestimonies = async () => {
      try {
        const response = await axios.get(
          "https://shopsnodejs.onrender.com/testimony"
        );
        setTestimonies(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };
    fetchTestimonies();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle edit
  const handleEdit = (testimonies) => {
    setEditingTestimonyId(testimonies._id);
    setFormData({
      email: testimonies.email,
      name: testimonies.name,
      testimony: testimonies.testimony,
    });
  };

  // Handle update
  const handleUpdate = async (editingTestimonyId) => {
    try {
      if (window.confirm("Do you really want to update this testimony?")) {
        const response = await axios.put(
          `https://shopsnodejs.onrender.com/testimony/${editingTestimonyId}`,
          formData
        );
        setTestimonies(
          testimonies.map((test) =>
            test._id === editingTestimonyId
              ? { ...test, ...response.data }
              : test
          )
        );
        setEditingTestimonyId(null);
        setFormData({ email: "", name: "", testimony: "" });
      }
    } catch (error) {
      console.error("Error updating testimony:", error);
      alert("Error updating Testimony", error);
    }
  };

  // Handle delete
  const handleDelete = async (testimonyId) => {
    try {
      if (window.confirm("Are you sure you want to delete this testimony?")) {
        await axios.delete(
          `https://shopsnodejs.onrender.com/testimony/${testimonyId}`
        );
        setTestimonies(testimonies.filter((test) => test._id !== testimonyId));
      }
    } catch (error) {
      console.error("Error deleting testimony:", error);
    }
  };

  console.log(testimonies[0]);
  return (
    <>
      <div className="title">
        <br />
      </div>
      <div className="container bg-white rounded-md">
        <div className="relative overflow-hidden bg-gray-100 ">
          <div className="fixed right-4">
            <Link to={"/Dashboard"}>
              <button>
                <HomeIcon className="size-4" />
              </button>
            </Link>
          </div>
          <h2 className="text-blue-400 font-bold">TESTIMONY</h2>
          {testimonies.length > 0 ? (
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
                  {testimonies.map((testimony) => (
                    <tr key={testimony._id} className="border-t">
                      {editingTestimonyId === testimony._id ? (
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
                              onClick={() => setEditingTestimonyId(null)}
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
        <Link to={"/dashboard"}>
          <button>
            <BsHouse />
          </button>
        </Link>
      </div>
    </>
  );
}
