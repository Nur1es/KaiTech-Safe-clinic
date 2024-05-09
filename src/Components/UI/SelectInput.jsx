// import React from "react";
import { Box, FormControl, MenuItem, Select, styled } from "@mui/material";
import { useForm } from "react-hook-form";

const SelectInput = ({
  width,
  padding,
  label,
  data,
  onChange,
  value,
  name,
}) => {
  const { register } = useForm();
  return (
    <div>
      <Box>
        <FormControl>
          <StyledLabel>{label}</StyledLabel>
          <StyledSelect
            {...register(name)}
            value={value}
            width={width}
            padding={padding}
            onClick={onChange}
          >
            {Array.isArray(data) &&
              data.map((el, id) => (
                <MenuItem key={id} value={el.name}>
                  {el.name}
                </MenuItem>
              ))}
          </StyledSelect>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectInput;

const StyledLabel = styled("label")(() => ({
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "18px",
  fontFamily: "Montserrat",
  margin: "4px 0",
}));

const StyledSelect = styled(Select)(({ theme, width, padding }) => ({
  width,
  "&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      borderColor: "transparent",
      border: "solid 2px #CED4DA",
    },
  ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
    padding,
  },
}));
