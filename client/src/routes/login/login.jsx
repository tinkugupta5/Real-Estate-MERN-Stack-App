import apiRequest from "../../lib/apiRequest";
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
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      // Redirect to login page on successful registration
      navigate("/login");
    } catch (error) {
      console.log(error);
      // Fix typo in error message
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
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
