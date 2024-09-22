import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="bg-orange-100 h-24 flex justify-center items-end">
        <nav className="flex justify-center space-x-14 font-mono text-xl">
          <li className="list-none">
            <NavLink
              to={"/top_headlines"}
              className={({ isActive }) => {
                return isActive
                  ? "text-2xl font-bold tr border-b-4 border-black"
                  : "";
              }}
            >
              Headlines
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={"/all"}
              className={({ isActive }) => {
                return isActive
                  ? "text-2xl font-bold tr border-b-4 border-black"
                  : "";
              }}
            >
              All
            </NavLink>
          </li>
        </nav>
      </div>
    </>
  );
};
