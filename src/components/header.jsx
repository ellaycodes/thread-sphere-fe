import { Link } from "react-router-dom";
import home from '../assets/home.png'
import logo from '../assets/Thread-removebg-preview.png'
import user from '../assets/user.png'
import topics from '../assets/users-alt.png'

export const Header = () => {
  return (
    <header>
      <Link to={`/`} className="h1"><img className="TS_logo" src={logo} alt="" /></Link>
      <nav>
        <Link to={"/"}><img className="home_icon" src={home} alt="home"/></Link>
        <Link to={"/profile"}><img className="home_icon" src={user} alt="profile"/></Link>
        <Link to={"/topics"}><img className="home_icon" src={topics} alt="topics"/></Link>
      </nav>
    </header>
  );
};
