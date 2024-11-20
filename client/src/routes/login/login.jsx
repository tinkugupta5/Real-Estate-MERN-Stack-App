import {useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from 'react-router-dom';
import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    if (!username || !password) {
      setError("All Fields Are Required");
      return;
    }

    try {
      const res = await apiRequest.post("/auth/login",{
        username,
        password,
      });
      localStorage.setItem("user",JSON.stringify(res.data))
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "An Error Occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login; 
