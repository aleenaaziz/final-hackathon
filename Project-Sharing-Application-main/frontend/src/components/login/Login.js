import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../features/userData/userSlice';


const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '', 
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/user/login", loginData);
    if(response.data){
      dispatch(loginUser(response.data))
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
