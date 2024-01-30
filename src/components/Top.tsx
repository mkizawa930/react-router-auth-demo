import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export const Top = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleClick = () => {
    console.log("logout");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>TopPage</h1>
      <button onClick={handleClick}>Logout</button>
      <div style={{ padding: 20 }}></div>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    </div>
  );
};

export default Top;
