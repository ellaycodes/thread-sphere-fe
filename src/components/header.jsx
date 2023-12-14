import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to={`/`} className="h1">Thread Sphere</Link>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/topics"}>Topics</Link>
      </nav>
    </header>
  );
};
