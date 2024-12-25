import React from "react";
React;
import { useState, useEffect } from "react";
import axios from "axios";

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
    } catch (error) {
      console.error("Error deleting post:", error);
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
    } catch (error) {
      console.error("Error updating post:", error);
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
      {/* Main Content */}
      <div className="flex-grow bg-gray-100 min-h-screen ">
        <h4>Posts</h4>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-2">ID</th>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2  ">Email</th>
                <th className="text-left py-2  ">Price</th>
                <th className="text-left py-2 ">Type</th>
                <th className="text-left py-2  ">URL</th>
                <th className="text-center py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts?.posts?.map((post) => (
                <tr key={post._id} className="border-t">
                  {editingPost === post._id ? (
                    <>
                      <td className="py-2 px-4 border">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="text"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="text"
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="py-2 px-4 border">
                        <input
                          type="url"
                          name="url"
                          value={formData.url}
                          onChange={handleInputChange}
                          className="w-full border p-1"
                        />
                      </td>
                      <td className="py-2 px-4 border text-center">
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
                      <td className="py-2 px-2 border">{post._id}</td>
                      <td className="py-2 px-2 border">{post.name}</td>
                      <td className="py-2 px-2 border">{post.email}</td>
                      <td className="py-2 px-4 border">{post.price}$</td>
                      <td className="py-2 px-2 border">{post.type}</td>
                      <td className="py-2 px-2 border">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      </td>
                      <td className="py-2 px-2 border text-center">
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
    </div>
  );
}
