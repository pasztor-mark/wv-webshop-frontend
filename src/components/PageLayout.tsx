import { Outlet, useNavigate } from "react-router";
import {
  FaHouse,
  FaPlus,
  FaAward,
  FaCartShopping,
  FaStar,
  FaTableCellsColumnLock,
} from "react-icons/fa6";
import { useEffect } from "react";
import { useAuthentication } from "./contexts/AuthenticationContext";
import { Avatar, AvatarFallback } from "./ui/avatar";
import checkAuth, {
  getSelf,
  initialValidation,
  invalidateToken,
} from "@/lib/api/auth/General";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function PageLayout() {
  const { user, setUser } = useAuthentication();
  const navigate = useNavigate();
  async function checkUser() {
    const user = await getSelf();
    if (user === null) {
      setUser(null);
      localStorage.removeItem("user");
      console.log("user is null");
      await invalidateToken();
      navigate("/auth");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      console.log(user);
    }
  }
  useEffect(() => {
    checkUser();
  }, []);
  if (user === null) navigate("/auth");
  return (
    <div className={"w-screen primary"}>
      <header className="highlight flex justify-center  items-center">
        <p className="text-black">
          <span className="font-bold text-black">FLASH SALE!</span> Enjoy sales
          up to 30% off!
        </p>
      </header>
      <main className="flex flex-row gap-2  ">
        <aside className="basis-1/6 border-r border-highlight h-screen">
          <nav className="flex flex-col justify-between">
            <div className=" border-b-2 border-r-2 border-highlight justify-center rounded-br-full secondary py-2 flex gap-4 items-center">
              <Avatar className="border-2 p-4 border-highlight">
                <AvatarFallback className="font-bold text-xl">
                  {user && user.username[0]}
                  {user && user.username[1]}
                </AvatarFallback>
              </Avatar>
              <p className="font-semibold text-xl">{user && user.username}</p>
            </div>
            <ul className="flex flex-col mx-2 mt-4 gap-4">
              <li className="nav-item" onClick={() => navigate("/")}>
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
              <Drawer direction="right">
                <DrawerTrigger className="nav-item">
                  <FaCartShopping className="mr-2" />
                  Cart
                </DrawerTrigger>
                <DrawerContent className="border-2 border-highlight rounded-l-2xl">
                  <DrawerHeader className="flex items-center">
                    <DrawerTitle className="text-3xl">Your Cart</DrawerTitle>
                  </DrawerHeader>
                  <div>

                  </div>
                  <DrawerFooter>
                    12 items
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              <li className="nav-item" onClick={() => navigate("/new")}>
                <FaPlus className="mr-2" />
                New piece
              </li>
              <li className="nav-item">
                <FaTableCellsColumnLock className="mr-2" />
                Dashboard
              </li>
            </ul>
          </nav>
          <img className="absolute bottom-0" src="/triangle.png" />
        </aside>
        <div className="mt-2 basis-5/6 mx-auto ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default PageLayout;
