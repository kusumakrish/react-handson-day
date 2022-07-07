import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to="/Home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/About">About</Link>
      <Link to="/NotFound"></Link>
    </div>
  );
};

export default Nav;
