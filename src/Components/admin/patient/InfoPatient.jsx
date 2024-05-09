import React, { useState } from "react";
import Modal from "../../UI/Modal";
import { Box, IconButton, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../UI/Button";
import { patientInfo } from "../../../utils/constanta";
const InfoPatient = ({ open, onClose }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose} borderRadius={"10px"}>
        <StyledBoxInfo>
          <StyledBox>
            <h2>Информация о пациенте</h2>
          </StyledBox>
          <InfoContainer>
            {patientInfo.map((el, index) => (
              <StyledBlock key={index}>
                <div>
                  <InfoItem>
                    <span>ФИО:</span> {el.name}
                  </InfoItem>
                  <InfoItem>
                    <span>Телефон:</span> {el.phone}
                  </InfoItem>
                  <InfoItem>
                    <span>Запись к врачу:</span> {el.doctor}
                  </InfoItem>
                  <InfoItem>
                    <span>Дата записи:</span> {el.date}
                  </InfoItem>
                  <InfoItem>
                    <span>Время:</span> {el.time}
                  </InfoItem>
                </div>
                <div>
                  <InfoItem>
                    <span>Адрес:</span> {el.address}
                  </InfoItem>
                  <InfoItem>
                    <span>Пол:</span> {el.pol}
                  </InfoItem>
                  <InfoItem>
                    <span>Дата рождения:</span> {el.dataRoj}
                  </InfoItem>
                  <InfoItem>
                    <span style={{ width: "150px" }}>Жалобы:</span>{" "}
                    {el.complant}
                  </InfoItem>
                </div>
              </StyledBlock>
            ))}
          </InfoContainer>
          <ButtonContainer>
            <Button
              onClick={onClose}
              borderRadius={"7.3px"}
              padding={"3px 20px"}
              border={"none"}
              background={"#838383"}
              color={"white"}
            >
              <IconButton sx={{ color: "white" }}>
                <CloseIcon sx={{ width: 25 }} />
              </IconButton>
              Отмена
            </Button>
          </ButtonContainer>
        </StyledBoxInfo>
      </Modal>
    </div>
  );
};

export default InfoPatient;

const StyledBoxInfo = styled(Box)(() => ({
  width: "616px",
  height: "446px",
  borderRadius: "15px",
  position: "relative",
}));

const StyledBox = styled(Box)(() => ({
  height: "83px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  borderRadius: "12px",
  background: "#D4EFF3",
  h2: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: 400,
    marginLeft: "24px",
  },
}));

const StyledBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
}));

const InfoContainer = styled(Box)(() => ({
  padding: "20px",
  maxHeight: "300px",
  overflow: "hidden",
}));

const InfoItem = styled("p")(() => ({
  margin: "25px 0",
  width: "270px",
  span: {
    fontWeight: 500,
  },
}));

const ButtonContainer = styled(Box)(() => ({
  position: "absolute",
  bottom: 25,
  right: 40,
}));
