import {useState, useEffect} from "react";

const CRUD = ()=>{
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: "", username: "", email: "",  phone: ""});
    const [editUser, setEditUser] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(()=>{
        fetchUsers();
    }, [])

    const  fetchUsers = async()=>{
       const response = await fetch('https://jsonplaceholder.typicode.com/users')
       const data = await response.json();
       console.log(data); 
       setUsers(data);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleEditChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };


    //   Create new user
    const handleNewSubmit = async(e)=>{
        e.preventDefault();
        const newUser = { ...formData, id: users.length + 1 };
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then ((response)=>response.json())
        .then((data)=>{
            setUsers([...users, { ...data, id: newUser.id }]);
            setFormData({ name: "", username: "", email: "", phone: "" });
        })
        
    }


    // Deleting User
    const handleDelete = (id) =>{
        const updatedUsers = users.filter((user) => user.id !== id);
        const reorderedUsers = updatedUsers.map((user, index) => ({ ...user, id: index + 1 }));
        setUsers(reorderedUsers);
    }
    

    const toggleEditForm = (user) => {
        setSelectedUser(user);
        setEditUser(!editUser);
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = { ...selectedUser };
            setUsers(users.map((user) => (user.id === selectedUser.id ? updatedUser : user)));
            setEditUser(!editUser);
            setSelectedUser(null);
    };
    
    

    return (
        <div>
            <h1>CRUD App</h1>
            <form onSubmit={handleNewSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required/>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} required/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required/>
                <button type="Submit">Submit</button>
            </form>
            <h3>Users Info</h3>
             
                <table border={1}>
                    <tr>
                        <th>Sr. no.</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>email</th>
                        <th>Phone</th>
                    </tr>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}.</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button onClick={()=>toggleEditForm(user)}>Edit</button></td>
                            <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </table>

                {/* {editUser && (
                    <form onSubmit={handleEditSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={editUser.name} onChange={handleChange} required/>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" value={editUser.username} onChange={handleChange} required/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={editUser.email} onChange={handleChange} required/>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" name="phone" id="phone" value={editUser.phone} onChange={handleChange} required/>
                        <button type="submit">Update</button>
                    </form>
                )} */}
                 {editUser && selectedUser && (
                <form onSubmit={handleEditSubmit}>
                    <h3>Edit User</h3>
                    <label htmlFor="edit-name">Name:</label>
                    <input type="text" name="name" id="edit-name" value={selectedUser.name} onChange={handleEditChange} required />
                    
                    <label htmlFor="edit-username">Username:</label>
                    <input type="text" name="username" id="edit-username" value={selectedUser.username} onChange={handleEditChange} required />
                    
                    <label htmlFor="edit-email">Email:</label>
                    <input type="email" name="email" id="edit-email" value={selectedUser.email} onChange={handleEditChange} required />
                    
                    <label htmlFor="edit-phone">Phone:</label>
                    <input type="tel" name="phone" id="edit-phone" value={selectedUser.phone} onChange={handleEditChange} required />
                    
                    <button type="submit">Update</button>
                    <button type="button" onClick={() => setEditUser(false)}>Cancel</button>
                </form>
            )}
        </div>
    )
}

export default CRUD;