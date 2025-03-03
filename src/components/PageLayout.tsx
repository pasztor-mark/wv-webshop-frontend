import { Outlet } from "react-router";
import { Button } from "./ui/button";
import {FaHouse, FaPlus, FaAward, FaCartShopping, FaStar, FaTableCellsColumnLock } from "react-icons/fa6";
import { useEffect } from "react";
import { useAuthentication } from "./contexts/AuthenticationContext";
import { Avatar, AvatarFallback } from "./ui/avatar";

function PageLayout() {
  const { user, setUser } = useAuthentication();
  useEffect(() => {
    if (user === null) {
      setUser(JSON.parse(localStorage.getItem("user") || "{}"));
    }
  }, []);
  return (
    <div className={"w-screen h-screen primary overflow-hidden"}>
      <header className="highlight flex justify-center items-center">
        <p className="text-black">
          <span className="font-bold text-black">FLASH SALE!</span> Enjoy sales
          up to 30% off!
        </p>
      </header>
      <main className="flex flex-row gap-2 overflow-hidden">
      <aside className="basis-1/6 border-r overflow-hidden border-highlight h-screen">
          <nav className="flex flex-col justify-between">
              <div className=" border-b-2 border-r-2 border-highlight justify-center rounded-br-full secondary py-2 flex gap-4 items-center">

            <Avatar className="border-2 p-4 border-highlight">
              <AvatarFallback className="font-bold text-xl">
                {user?.name.split(" ")[0][0].toUpperCase()}
                {user?.name.split(" ")[1][0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-semibold text-xl">
              {user?.name}
            </p>
            </div>
            <ul className="flex flex-col mx-2 mt-4 gap-4">
              <li className="nav-item">
                <FaHouse className="mr-2" />
                Home
              </li>
              <li className="nav-item">
                <FaAward className="mr-2" />
                Your profile
              </li>
              <li className="nav-item">
                <FaStar className="mr-2" />
                Your pieces
              </li>
              <li className="nav-item">
                <FaCartShopping className="mr-2" />
                Cart
              </li>
              <li className="nav-item">
                <FaPlus className="mr-2" />
                New piece
              </li>
              <li className="nav-item">
                <FaTableCellsColumnLock className="mr-2" />
                Dashboard
              </li>
            </ul>
          </nav>
          <img className="absolute bottom-0" src="/triangle.png"/>
      </aside>
        <div className="mt-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default PageLayout;
