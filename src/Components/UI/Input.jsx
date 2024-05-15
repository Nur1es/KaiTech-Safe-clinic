import { TextField, styled } from "@mui/material";
import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      width,
      name,
      height,
      margin,
      value,
      padding,
      textAlign,
      placeholder,
      borderRadius,
      onChange,
      register,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledDivInput ref={ref}>
        <StyledLabel textAlign={textAlign}>{label}</StyledLabel>
        <StyledInput
          {...rest}
          register
          ref={ref}
          name={name}
          value={value}
          width={width}
          margin={margin}
          height={height}
          padding={padding}
          onChange={onChange}
          placeholder={placeholder}
          borderRadius={borderRadius}
        />
      </StyledDivInput>
    );
  }
);

export default Input;

const StyledDivInput = styled("div")(({ margin, width }) => ({
  width,
  margin,
  display: "flex",
  flexDirection: "column",
}));

const StyledInput = styled(TextField)(
  ({ height, width, padding, borderRadius }) => ({
    width,
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderRadius,
      borderColor: "#CED4DA",
    },
    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
      padding,
      height,
    },
  })
);

const StyledLabel = styled("label")(({ textAlign }) => ({
  textAlign,
  margin: "5.5px 0",
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "18px",
  fontFamily: "Montserrat",
}));
