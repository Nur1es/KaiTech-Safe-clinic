import React from "react";
import Modal from "../../UI/Modal";
import { Box, styled } from "@mui/material";
import { infoBranch } from "../../../utils/constanta";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../UI/Button";
export const BranchInfo = ({ open, onClose }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose} borderRadius={"8px"} border={"none"}>
        <>
          <StyledBox>
            <h2>Информация о флиале </h2>
          </StyledBox>
          <Box>
            {infoBranch.map((el, id) => (
              <StyledBlock key={id}>
                <span>
                  <p>Название филиала: {el.name}</p>
                  <p>Адрес: {el.address}</p>
                </span>
                <span>
                  <p>Директор: {el.director}</p>
                  <p>Телефон: {el.phone}</p>
                </span>
              </StyledBlock>
            ))}
          </Box>
          <Div>
            <Button
              onClick={onClose}
              padding={"8px 20px"}
              borderRadius={"7.3px"}
              background={"#838383"}
              border={"none"}
              color={"white"}
            >
              <span style={{ alignItems: "center", display: "flex" }}>
                <CloseIcon />
                Отмена
              </span>
            </Button>
          </Div>
        </>
      </Modal>
    </div>
  );
};

export default BranchInfo;
const StyledBox = styled(Box)(() => ({
  width: "650px",
  height: "85px",
  display: "flex",
  alignItems: "center",
  background: "#D4EFF3; ",
  borderRadius: "8px",
  h2: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "29.26px",
    marginLeft: "30px",
  },
}));
const StyledBlock = styled(Box)(() => ({
  display: "flex",
  width: "550px",
  justifyContent: "space-between",
  marginLeft: "30px",
  span: {
    margin: "25px 0",
    display: "flex",
    flexDirection: "column",
    gap: "35px",
  },
}));
const Div = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  margin: "20px 45px",
}));
