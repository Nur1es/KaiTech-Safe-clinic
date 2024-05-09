import React from "react";
import { Menu } from "antd";
import analitik from "../../assets/icon/analitick.svg";
import branch from "../../assets/icon/branches.svg";
import dictor from "../../assets/icon/doctorsIcon.svg";
import noti from "../../assets/icon/notification.svg";
import patients from "../../assets/icon/patients.svg";
import service from "../../assets/icon/service.svg";
import setting from "../../assets/icon/settings.svg";
import logo from "../../assets/icon/logo.svg";
import exist from "../../assets/icon/exist.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type, path) {
  return {
    label,
    key,
    icon,
    children,
    type,
    path,
  };
}

const items = [
  getItem(
    "Аналитика",
    "1",
    <img src={analitik} alt="dfewfew" />,
    null,
    "item",
    "analytics"
  ),
  getItem(
    "Услуги",
    "2",
    <img src={service} alt="dfewfew" />,
    null,
    "item",
    "usluga"
  ),
  getItem(
    "Список врачей",
    "3",
    <img src={dictor} alt="dfewfew" />,
    null,
    "item",
    "list-doctors"
  ),
  getItem(
    "Список пациентов",
    "4",
    <img src={patients} alt="dfewfew" />,
    null,
    "item",
    "list-pasient"
  ),
  getItem(
    "Филиалы ",
    "5",
    <img src={branch} alt="dfewfew" />,
    null,
    "item",
    "branch"
  ),
  getItem(
    "Уведомление ",
    "6",
    <img src={noti} alt="dfewfew" />,
    null,
    "item",
    "notification"
  ),
  getItem(
    "Настройка ",
    "7",
    <img src={setting} alt="dfewfew" />,
    null,
    "item",
    "setting"
  ),
];

const SideBar = () => {
  const onClick = (e) => {
    // console.log('click ', e);
  };

  return (
    <SideBarr
      onClick={onClick}
      style={{
        width: 318,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Logo>
        <LogoDiv>
          <img src={logo} alt="" />
          <LogoTextStyle>safe.clinic</LogoTextStyle>
        </LogoDiv>
        
        <LogoDiv2>
          <span>Все условия для вашей безопасности</span>
        </LogoDiv2>
      </Logo>
      {items.map((item, id) => (
        <MenuItem key={id} icon={item.icon}>
          <Itemm style={{ marginTop: "0px" }} key={item.key} to={item.path}>
            {item.label}
          </Itemm>
        </MenuItem>
      ))}
      <Exist>
        <Link to={"/auth"}>
          <ButtonStyle>
            <img src={exist} alt="" /> Выход
          </ButtonStyle>
        </Link>
      </Exist>
    </SideBarr>
  );
};

export default SideBar;

const ButtonStyle = styled.button`
  width: 123px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 6px;
  background-color: #dcdbff;
  cursor: pointer;
`;

const Exist = styled.div`
  height: 130px;
  display: flex;
  width: 277px;
  align-items: end;
  padding: 0 0 10px 0px;
`;
const SideBarr = styled(Menu)`
  position: fixed;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Logo = styled.div`
  width: 196px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const LogoDiv = styled.div`
  width: 196px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const LogoDiv2 = styled.div`
  width: 183px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 10px 0;
  line-height: 1;
`;

const LogoTextStyle = styled.h2`
  color: #53a8bb;
  font-size: 31.37px;
  font-weight: 600;
`;

const Itemm = styled(Link)`
  width: 100%;
`;
const MenuItem = styled(Menu.Item)`
  width: 100%;
`;
