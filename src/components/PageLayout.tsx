import {Outlet} from "react-router";

function PageLayout() {
    return (
        <div className={"w-screen h-screen primary"}>

        <header>
            Webshop App
        </header>
        <main>
            <Outlet/>
        </main>
        </div>
    );
}

export default PageLayout;