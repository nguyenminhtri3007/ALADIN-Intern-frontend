import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import WithAdminAccess from "../../components/WithAdminAccess";

const ProtectedAdminDashboard = WithAdminAccess(AdminDashboard);


const LoginScreen = ()  =>{
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ username: "", role: "user" });

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username.trim() === "") {
      alert("Vui lòng nhập tên!");
      return;
    }

    setUser({ username: form.username.trim(), role: form.role });
  };

  const handleLogout = () => {
    setUser(null);
    setForm({ username: "", role: "user" });
  };

  return(
    <div style={{padding:'50px'}}>
     <h2>Kiểm tra HOC</h2>
    {!user ? (
        <form onSubmit={handleLogin}>
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
               Role:
              <select name="role" value={form.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>
          <button type="submit"> Đăng nhập</button>
        </form>
      ) : (
        <div>
          <p>
            Xin chào <strong>{user.username}</strong> ({user.role})
          </p>
          <button onClick={handleLogout}> Đăng xuất</button>
        </div>
      )}

      <hr />

  
      {user ? (
        <ProtectedAdminDashboard {...user} />
      ) : (
        <p> Vui lòng đăng nhập để truy cập trang admin.</p>
      )}
    
    </div>
    
  )
}

export default LoginScreen;