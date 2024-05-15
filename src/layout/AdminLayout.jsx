import React from "react";
import SideBar from "../Components/admin/SideBar";
import { Outlet } from "react-router";
import Header from "../Components/admin/Header";
import { styled } from "@mui/material";

export const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{display:"flex",gap:"50px"}}>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

const Container = styled("div")(()=>({
  background:"white",
  margin:"110px 0 0 23px",
  borderRadius:"10px"
}))
