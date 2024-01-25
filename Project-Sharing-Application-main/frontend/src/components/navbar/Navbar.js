import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../../features/userData/userSlice";

const Navbar = () => {
  const  {userLogin}  = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{ 
    if(userLogin.email){
      setIsLogin(true);
      navigate("/submissionForm")
    }
    else{
      setIsLogin(false)
    }
  },[userLogin])
  return (
    <nav>
      {isLogin ? (
        <ul>
          <li>
            <Link to="/submissionForm">SubmissionProject</Link>
          </li>
          <li>
            <Link to="/allProject">All Project</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
