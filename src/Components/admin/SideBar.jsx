import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material";
export const NavLinkAdmin = [
  {
    link: "/admin/analytics",
    icon: "/icon/analitick.svg",
    name: "Аналитика",
  },
  {
    link: "/admin/usluga",
    icon: "/icon/usluga.svg",
    name: "Услуги",
  },
  {
    link: "/admin/list-doctors",
    icon: "/icon/doctorsIcon.svg",
    name: "Список врачей",
  },
  {
    link: "/admin/list-pasient",
    icon: "/icon/patients.svg",
    name: "Список пациентов",
  },
  {
    link: "/admin/branch",
    icon: "/icon/branches.svg",
    name: "Филиалы ",
  },
  {
    link: "/admin/Notification",
    icon: "/icon/notification.svg",
    name: "Уведомление",
  },
  {
    link: "/admin/setting",
    icon: "/icon/settings.svg",
    name: "Настройкаx",
  },
];

const SideBar = () => {
  return (
    <div>
      <MainBlock>
        <StyledDiv>
          <StyledText>
            <img style={{ width: 20 }} src="/img/Safety.png" alt="logo" />
            <h3>safe.clinic</h3>
          </StyledText>
          <p>Все условия для вашей безопасности</p>
          <div>
            {NavLinkAdmin.map((elem, index) => (
              <NavLinkStyle to={elem.link} key={index}>
                <img src={elem.icon} alt="icon" />
                <p>{elem.name}</p>
              </NavLinkStyle>
            ))}
          </div>
        </StyledDiv>
          <ButtonExit>
            <img src="/icon/exist.svg" alt="" />
            <p>Выход</p>
          </ButtonExit>
      </MainBlock>
    </div>
  );
};

export default SideBar;

const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    width: "185px",
    textAlign: "center",
  },
}));
const StyledText = styled("p")(() => ({
  display: "flex",
  alignItems: "center",
  margin: "23px 0",
  gap: "5px",
  h3: {
    fontFamily: " Montserrat ",
    fontSize: "20px",
    fontWeight: 600,
    color: "#53A8BB",
  },
}));
const MainBlock = styled("div")(() => ({
  width: "320px",
  background: "white",
  height: "727px",
}));
const NavLinkStyle = styled(NavLink)(() => ({
  display: "flex",
  marginTop: "30px",
  gap: "10px",
  padding: "7px 10px",
  borderRadius: "5px",
  " &.active": {
    background: "#dddcff",
  },
  p: {
    textAlign: "start",
    fontFamily: "Montserrat",
    fontSize: "16px",
    color: "black",
    fontWeight: 500,
  },
  textDecoration: "none",
  borderBottom: "none",
}));
const ButtonExit = styled("div")(() => ({
  display: "flex",
  background: "#DCDBFF",
  padding: "15px",
  gap: "20px",
  width: "100px",
  borderRadius: "10px",
  margin: "95px 30px",
  p: {
    fontWeight: 500,
    fontFamily: "Montserrat",
  },
}));
