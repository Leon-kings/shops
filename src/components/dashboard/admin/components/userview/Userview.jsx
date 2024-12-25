import axios from 'axios';
import React, { useEffect, useState } from 'react'

React;
const Userview = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({
      fullname: "",
      email: "",
      password: "",
      phone: "",
    });
  
    // Fetch users from API
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(
            "https://backendproject-8m9r.onrender.com/users"
          );
          setUsers(response.data.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers();
    }, []);
  
    // Delete user
    const handleDelete = async (userId) => {
      try {
        if (window.confirm("Do you really want to Delete?")) {
  
          await axios.delete(`https://backendproject-8m9r.onrender.com/users/${userId}`);
          setUsers(users.filter((user) => user._id !== userId));
        }
        else {
          alert('Error in delete')
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Error deleting user:", error);
      }
    };
  
    // Handle edit
    const handleEdit = (user) => {
      setEditingUser(user._id);
      setFormData({ fullname: user.fullname, email: user.email, password: user.password, phone: user.phone });
    };
  
    // Update user
    const handleUpdate = async (userId) => {
      try {
        if (window.confirm("Do you really want to Update?")) {
          await axios.put(`https://backendproject-8m9r.onrender.com/users/${userId}`, formData);
          setUsers(
            users.map((user) =>
              user._id === userId ? { ...user, ...formData } : user
            )
          );
          setEditingUser(null);
        } else {
          alert('Error in Updating ')
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
    console.log(users[0])
  
  return (
    <div>
                {/* Main Content */}
                <div className="flex-grow bg-gray-100 min-h-screen ">


<h4>Users</h4>
{users.length > 0 ? (
  <div className="w-full overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead>
      <tr className="bg-gray-100">
        <th className="text-left py-2 px-4 border">ID</th>
        <th className="text-left py-2 px-4 border">Name</th>
        <th className="text-left py-2 px-4 border">Email</th>
        <th className="text-left py-2 px-4 border">Password</th>
        <th className="text-left py-2 px-4 border">Tel</th>
        <th className="text-center py-2 px-4 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id} className="border-t">
          {editingUser === user._id ? (
            <>
              <td>{user._id}</td>
              <td className="py-2 px-4 border">
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
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
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border p-1"
                />
              </td>
              <td className="py-2 px-4 border">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border p-1"
                />
              </td>
              <td className="py-2 px-4 border text-center">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleUpdate(user._id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>
              </td>
            </>
          ) : (
            <>
              <td className="py-2 px-4 border">{user._id}</td>
              <td className="py-2 px-4 border">{user.fullname}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">******</td>
              <td className="py-2 px-4 border">{user.phone}</td>
              <td className="py-2 px-4 border text-center">
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
  <p className='text-red-500'> No users found.</p>
)}

</div>
    </div>
  )
}

export default Userview
