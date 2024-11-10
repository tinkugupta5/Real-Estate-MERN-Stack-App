import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!username || !email || !password) {
      setError("all fields are required");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading} type="submit">Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
}

export default Register;
