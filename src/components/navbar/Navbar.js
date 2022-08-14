import "./navbar.css";
import {Link} from "react-router-dom";

export function Navbar(){
return (
<nav className="navbar">
    <div className="nav-heading">
        <Link to="/" className="icon"> Web-Dev-Quiz</Link>
    </div>
    <ul className="nav-comp-list">
        <li className="nav-inline">
          <Link to="/login"><button  className="bt btn-primary login-button">Login/ SignUp</button></Link>
        </li> 
    </ul>
</nav>
);
}