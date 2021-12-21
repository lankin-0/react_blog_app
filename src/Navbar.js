import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <Link to="/">
            <h1>Bloging</h1>
            </Link>
            <div className="links">
                <ul className="list-links">
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/create">
                <li>Create Blog</li>
                </Link>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;