import { styled } from "@mui/material";
import React from "react";

export const TextAreaInput = React.forwardRef(
  ({ label, width, height, borderRadius, padding, ...rest }, ref) => {
    return (
      <StyletDiv>
        <label>{label}</label>
        <TextArea
          rows="10"
          cols="45"
          name="text"
          width={width}
          height={height}
          borderRadius={borderRadius}
          padding={padding}
          {...rest}
          ref={ref}
        ></TextArea>
      </StyletDiv>
    );
  }
);
export default TextAreaInput;
const StyletDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  label: {
    fontSize: "15px",
    fontWeight: 400,
    margin: "6px 0",
    lineHeight: "18px",
    fontFamily: "Montserrat",
  },
}));
const TextArea = styled("textarea")(
  ({ width, height, padding, borderRadius }) => ({
    width,
    height,
    padding,
    borderRadius,
    overflow: "hidden",
    "&:focus": {
      outline: "none",
    },
    resize: "none",
  })
);
