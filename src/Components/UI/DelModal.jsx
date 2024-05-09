import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { styled } from "@mui/material";

export const DelModal = ({ deleteChangeHandler, onClose, open }) => {
  return (
    <>
      <Modal open={open} borderRadius={"10px"} onClose={onClose}>
        <StyleBlockModal>
          <p>Вы действительно хотите удалить? </p>
          <StyledButton>
            <Button
              onClick={onClose}
              padding={"10px 40px"}
              borderRadius={"7.3px"}
              border={"none"}
              color={"white"}
              background={"#838383"}
            >
              Нет
            </Button>
            <Button
              background={"#53A8BB"}
              padding={"10px 45px"}
              borderRadius={"7.3px"}
              border={"none"}
              color={"white"}
              onClick={deleteChangeHandler}
            >
              Да
            </Button>
          </StyledButton>
        </StyleBlockModal>
      </Modal>
    </>
  );
};
const StyleBlockModal = styled("div")(() => ({
  width: "400px",
  height: "190px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: {
    margin: "45px 0",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "20px",
  },
}));
const StyledButton = styled("div")(() => ({
  display: "flex",
  gap: "30px",
}));