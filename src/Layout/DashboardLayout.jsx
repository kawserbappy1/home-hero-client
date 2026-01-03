import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className=" grid grid-cols-12 gap-2">
      <div className="col-span-2">
        <aside className="w-full bg-white border min-h-screen">
          <h1>This is Sidebar</h1>
        </aside>
      </div>
      <div className="col-span-9 flex flex-col">
        <header>this is header</header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardLayout;
