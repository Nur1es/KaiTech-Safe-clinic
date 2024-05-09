import { styled } from "@mui/material";
import React from "react";

const Button = ({
  type,
  color,
  border,
  padding,
  onClick,
  children,
  fontSize,
  fontWeight,
  background,
  borderRadius,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      border={border}
      padding={padding}
      fontSize={fontSize}
      background={background}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled("button")(
  ({
    color,
    padding,
    border,
    fontSize,
    background,
    fontWeight,
    borderRadius,
  }) => ({
    color,
    border,
    padding,
    fontSize,
    fontWeight,
    background,
    borderRadius,
    cursor: "pointer",
  })
);