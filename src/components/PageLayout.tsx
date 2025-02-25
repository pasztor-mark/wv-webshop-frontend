import { Outlet } from "react-router";
import { Button } from "./ui/button";
import { FaHome, FaPlusCircle, FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping, FaTableCellsColumnLock } from "react-icons/fa6";

function PageLayout() {
  return (
    <div className={"w-screen h-screen primary overflow-hidden"}>
      <header className="bg-emerald-600 px-4 text-white flex justify-between py-2 text-3xl font-black text-center">
        <div className="flex flex-row gap-4">

        <button>
            <FaHome size={32} />
        </button>
        <button>
            <FaPlusCircle size={32} />
        </button>
        <button>
            <FaCartShopping size={32} />
        </button>
        <button>
            <FaTableCellsColumnLock size={32} />
        </button>
        </div>
        
        -Webshop App-
        <button className="mx-2">
            <FaRegUserCircle size={32} />
        </button>
      </header>
      <main className="flex flex-row gap-2">

        <div className="mt-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default PageLayout;
