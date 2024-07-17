import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { NavBarItems } from "./NavBarItems";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

const NavBar = () => {
  const { logOut, user } = useUserContext();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full pt-4 pb-2 top-0 fixed text-white bg-[#643A4C]">
        <div className="flex justify-between pb-3 px-8 items-center">
          <div
            className="text-3xl w-2/6 pt-3 z-10 "
            onClick={() => navigate("/dashboard")}
          >
            Bill Splitter
          </div>
          <div
            className={`bg-[#643A4C] w-full left-0 absolute justify-between  py-5 lg:flex lg:w-4/6 lg:static ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            <div className="pl-8 text-center space-y-3 lg:space-x-20 lg:pt-7 lg:space-y-0 lg:flex">
              {NavBarItems.map((item, key) => (
                <div key={key}>
                  <Link to={item.path} key={key} className="lg:text-xl">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-5 text-center ml-8 z-20">
              {user !== null && (
                <Button asChild>
                  <Link
                    to="/signin"
                    onClick={() => logOut()}
                    className="text-[22px]"
                  >
                    Log Out
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <div
            className="mt-5 cursor-pointer z-10 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon size={"36px"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
