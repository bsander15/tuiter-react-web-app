import { Link } from "react-router-dom";
function Nav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/labs">Labs</Link>
     <Link className="nav-link" to="/hello">Hello</Link>
     <Link className="nav-link" to="/tuiter">Tuiter</Link>
   </nav>
 );
}
export default Nav;