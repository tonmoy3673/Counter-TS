import { NavLink } from "react-router";

const Navbar: React.FC = () => {
  return (
    <>
      {/* =========== Navbar content ======== */}
      <nav className="py-8 flex justify-between items-center">
        {/* =========== Band ======== */}
        <p className="text-2xl font-bolder">Counter App</p>

        <ul className="mx-auto flex gap-x-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-gray-700"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-gray-700"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-gray-700"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
