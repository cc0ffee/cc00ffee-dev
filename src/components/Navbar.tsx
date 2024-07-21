import { Link } from 'react-router-dom';

function Navbar() {
    return <nav className="flex items-start space-x-32 mt-10">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/writeups">Writeups</Link>
        <Link to="/photography">Photography</Link>
    </nav>
}
export default Navbar;