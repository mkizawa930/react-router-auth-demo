import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("login");
    setIsLoggedIn(true);
    navigate("/private/top");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleClick}>Login</button>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
      </div>
    </div>
  );
};
