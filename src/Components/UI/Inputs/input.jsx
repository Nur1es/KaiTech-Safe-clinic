import React from "react";
import { Dropdown } from "antd";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import filter from "../../../assets/icon/filterInput.svg";

export default function CustomizedInputBase({ value, onChange }) {
  const items = [
    {
      key: "1",
      label: "Пол",
      children: [
        {
          key: "1-1",
          label: "Мужской",
        },
        {
          key: "2-2",
          label: "Женский",
        },
      ],
    },
    {
      key: "2",
      label: "Теги",
      children: [
        {
          key: "2-1",
          label: "Хирург-имплантолог ",
        },
        {
          key: "2-2",
          label: "Стоматолог",
        },
        {
          key: "2-3",
          label: "Рентгенолог",
        },
        {
          key: "2-4",
          label: "Педиатр",
        },
        {
          key: "2-5",
          label: "Хирург-ортопед",
        },
        {
          key: "2-6",
          label: "Хирург",
        },
      ],
    },
    {
      key: "3",
      label: "Возраст",
      children: [
        {
          key: "3-1",
          label: "от  20 до 30",
        },
        {
          key: "3-2",
          label: "от 30 до 40",
        },
        {
          key: "3-3",
          label: "от  40 до 50",
        },
      ],
    },
  ];

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 325,
        height: 42,
        border: "1px solid",
        borderRadius: "4px",
      }}
    >
      <Dropdown
        menu={{
          items,
        }}
      >
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={(e) => e.preventDefault()}
        >
          <img src={filter} alt="uno" />
        </IconButton>
      </Dropdown>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск"
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        onChange={onChange}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
