import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material";
import { useForm } from "react-hook-form";

export default function InputDate({
  name,
  value,
  padding,
  onChange,
  children,
}) {
  const { register } = useForm();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledBlock>
        <label>{children}</label>
        <StyledDatePicker
          type="date"
          padding={padding}
          {...register(name)}
          onChange={onChange}
          value={value}
        />
      </StyledBlock>
    </LocalizationProvider>
  );
}
const StyledDatePicker = styled(DatePicker)(({ padding }) => ({
  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ": {
    borderColor: "transparent",
    border: "1px solid #CED4DA ",
  },
  "&:hover fieldset": {
    borderColor: "transparent",
  },
  "& .MuiInputBase-input": {
    padding: padding || "8px",
  },
}));
const StyledBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  label: {
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "18.29px",
    padding: "5px 0 ",
  },
}));
