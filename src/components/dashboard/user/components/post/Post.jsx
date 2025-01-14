import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../../admin/components/userview/components/css.css'
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/16/solid';
React;
export default function UPost() {
  const [post, setPosts] = useState([]);
  const [editingPost, setEditingPosts] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    description: "",
    image:"",
    name: "",
    price: "",
  });

  // Fetch users from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://shopsnodejs.onrender.com/posts"
        );
        setPosts(response.data.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error fetching Posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Delete user
  const handleDelete = async (userId) => {
    try {
      if (window.confirm("Do you really want to Delete?")) {
        await axios.delete(
          `https://shopsnodejs.onrender.com/posts/${userId}`
        );
        setPosts(post.filter((user) => user._id !== userId));
      } else {
        alert("Error in delete");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting posts:", error);
    }
  };

  // Handle edit
  const handleEdit = (user) => {
    setEditingPosts(user._id);
    setFormData({
      email: "",
      description: "",
      image:"",
      name: "",
      price: "",
    });
  };

  // Update user
  const handleUpdate = async (userId) => {
    try {
      if (window.confirm("Do you really want to Update?")) {
        await axios.put(
          `https://shopsnodejs.onrender.com/posts/${userId}`,
          formData
        );
        setPosts(
          post.map((user) =>
            user._id === userId ? { ...user, ...formData } : user
          )
        );
        setEditingPosts(null);
      } else {
        alert("Error in Updating ");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(post[0]);
  return (
    <>
    <div className="title"></div>
    <div className='container'>
    <div className="relative overflow-hidden bg-gray-100">
    <div className=" fixed top right-4">
      <Link to={'/Udashboard'}>
        <button><HomeIcon className='size-4'/></button>
      </Link>
      </div>
      {post && post.length > 0 ? (
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
                 File
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {post.map((posts) => (
                <tr key={posts._id} className="border-t">
                  {editingPost === posts._id ? (
                    <>
                      <td>{posts._id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input
                          type="text"
                          name="fullname"
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
                          type="password"
                          name="password"
                          value={formData.file}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        <button
                          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                          onClick={() => handleUpdate(posts._id)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 text-white px-2 py-1 rounded"
                          onClick={() => setEditingPosts(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {posts._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {posts.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {posts.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <img src={posts.file} alt=""  className=' object-cover w-full'/> 
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {posts.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {posts.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                          onClick={() => handleEdit(posts)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDelete(posts._id)}
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
        <p className="text-red-500 font-bold p-6"> No posts found.</p>
      )}
    </div>
    </div>
    <br />
    </>
  )
}
