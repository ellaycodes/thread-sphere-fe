import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to={`/`} className="h1"><img className="TS_logo" src="src/assets/Thread-removebg-preview.png" alt="" /></Link>
      <nav>
        <Link to={"/"}><img className="home_icon" src="src/assets/home.png" alt="home"/></Link>
        <Link to={"/profile"}><img className="home_icon" src="src/assets/user.png" alt="profile"/></Link>
        <Link to={"/topics"}><img className="home_icon" src="src/assets/users-alt.png" alt="topics"/></Link>
      </nav>
    </header>
  );
};
