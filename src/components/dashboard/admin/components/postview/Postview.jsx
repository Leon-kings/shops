import React from "react";
React;
import { useState, useEffect } from "react";
import axios from "axios";
import "../userview/components/css.css";
import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { HomeIcon } from "@heroicons/react/16/solid";
export default function Postview() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: "",
    capacity: "",
    type: "",
    url: "",
  });

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://backendproject-8m9r.onrender.com/posts"
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Delete post
  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        `https://backendproject-8m9r.onrender.com/posts/${postId}`
      );
      setPosts(posts.filter((post) => post._id !== postId));
      alert('Deleted Successfully');
    } catch (error) {
      console.error("Error deleting post:", error);
      alert('Deleted Failed',error);
    }
  };

  // Handle edit
  const handleEdit = (post) => {
    setEditingPost(post.id);
    setFormData({
      name: post.name,
      email: post.email,
      price: post.price,
      capacity: post.capacity,
      type: post.type,
      url: post.url,
    });
  };

  // Update post
  const handleUpdate = async (postId) => {
    try {
      await axios.put(
        `https://backendproject-8m9r.onrender.com/posts/${postId}`,
        formData
      );
      setPosts(
        posts.map((post) =>
          post._id === postId ? { ...post, ...formData } : post
        )
      );
      setEditingPost(null);
      alert('Updated Successfully');
    } catch (error) {
      console.error("Error updating post:", error);
      alert('Updated Failed', error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(posts);
  return (
    <div>
      <div className="title">
        <br />
      </div>
      {/* Main Content */}
      <div className=" bg-gray-100  ">
      <div className="fixed right-4">
            <Link to={"/Dashboard"}>
              <button>
                <HomeIcon className="size-4" />
              </button>
            </Link>
          </div>
        <h4>Posts</h4>
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
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider ">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider ">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider ">
                  URL
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts?.posts?.map((post) => (
                <tr key={post._id} className="border-t">
                  {editingPost === post._id ? (
                    <>
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
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input
                          type="text"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input
                          type="text"
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input
                          type="url"
                          name="url"
                          value={formData.url}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        <button
                          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                          onClick={() => handleUpdate(post._id)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 text-white px-2 py-1 rounded"
                          onClick={() => setEditingPost(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {post._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {post.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {post.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {post.price}$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {post.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                          onClick={() => handleEdit(post)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDelete(post._id)}
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
      </div>
      <Link to={'/dashboard'}>
      <button><BsHouse/></button>
      </Link>
      <div className="title"></div>
    </div>
  );
}
