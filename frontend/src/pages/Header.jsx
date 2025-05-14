import { useContext } from 'react';
import { AuthContext } from './common/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const { login, setLogin } = useContext(AuthContext);
  const navigate = useNavigate(); // 👈 add this

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setLogin(false); // update context
    navigate('/Login'); // 👈 redirect to login page
  };

  return (
    <>
      <nav className="navbar container pt-3 pb-2">
        <a className="navbar-brand" href="#">Navbar</a>
        <div style={{ display: "flex" }}>
          {login ? (
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/Login">
                <button className="btn btn-success">Login</button>
              </Link>
              &nbsp;
              <Link to="/register">
                <button className="btn btn-light">Register</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
