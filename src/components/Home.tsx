import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/private/top">User Page</Link>
        </li>
      </div>
    </div>
  );
};

export default Home;
