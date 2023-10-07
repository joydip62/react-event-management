import { NavLink } from "react-router-dom";
import logo from "./../../../public/images/logo.png";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user, logout } = useAuth();

  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <a>SERVICE</a>
      </li>
      <li>
        <NavLink to="/gallery">GALLERY</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <NavLink to="./">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user?.displayName ? user?.displayName : "User"}</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn bg-[#F9A51A]">
              <NavLink to="./login">Login</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
