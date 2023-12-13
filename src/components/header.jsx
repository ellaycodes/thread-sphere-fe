import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>Thread Sphere</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/topics"}>Topics</Link>
        <Link to={"/profile"}>Profile</Link>
      </nav>
    </header>
  );
};
