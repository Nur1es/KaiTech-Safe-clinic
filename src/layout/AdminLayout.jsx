import React from "react";
import SideBar from "../Components/admin/SideBar";
import { Outlet } from "react-router";
import Header from "../Components/admin/Header";

export const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Header />
      <div style={{ margin: "130px 0 0 345px", width:'100%' }}>
        <Outlet />
      </div>
    </div>
  );
};