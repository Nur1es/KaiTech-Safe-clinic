import React from "react";
import CustomizedInputBase from "../UI/Inputs/input"
import dayjs from 'dayjs';
import 'dayjs/locale/ru'; // Импортируем русскую локализацию
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import calendar from '../../assets/icon/calendar.svg'
import { NotificationsNoneOutlined } from "@mui/icons-material";
import './header.css';
import { styled } from "@mui/material";

dayjs.locale('ru');

export default function Header({searchValue, setSearchValue}) {
  return (
    <HeaderStyle>
      <InputBlock>
        <CustomizedInputBase   
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </InputBlock>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

              <CalendarBlock >
                <CalendarIcon src={calendar} alt="calendar" />
                <MobileDatePicker
                  sx={{cursor:'pointer' }}
                  defaultValue={dayjs('2024-11-04')}
                />
              </CalendarBlock>
      </LocalizationProvider>
      <NotiProfileBlock>
        <NotiProfile>
          <NotificationsNoneOutlined/>
        </NotiProfile>
        <NotiProfile>
          <PhotoProfile src="https://i.pinimg.com/564x/04/04/f0/0404f0d0a88e16b76d9d1e04f782e4f7.jpg" alt="" />
        </NotiProfile>
      </NotiProfileBlock>
    </HeaderStyle>
  );
}

// Остальной код остается без изменений

const PhotoProfile = styled('img')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const CalendarBlock = styled('div')`
position: relative;
width: 200px;
cursor: pointer;
`;
const NotiProfile = styled('div')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NotiProfileBlock = styled('div')`
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const InputBlock = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 385px;
`;
const HeaderStyle = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 343px;
  width: 65%;
  z-index: 12;
  height: 90px;
  border-radius: 4px;
  padding: 0 80px;
  background-color: white;
`;

const CalendarIcon = styled('img')`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
`;
const StyledDemoItem = styled(DemoItem)(() => ({
'input .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input':{
    padding: '0px'
  }
}))
