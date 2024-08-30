import "./register.scss";
import { Link } from "react-router-dom";
import axios from 'axios'

function Register() {

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(username,email,password);

    const res = await axios.post("localhost:8800/api/auth/register",{
      username,email,password
    })
  }

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button >Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
