import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { loginUser } from '../../features/userData/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  

  const [signUpData, setSignUpData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/user/signUp", signUpData);
    if(response.data){
      dispatch(loginUser(response.data))
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          userName:
          <input
            type="text"
            name="userName"
            value={signUpData.userName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={signUpData.email}
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
            value={signUpData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
