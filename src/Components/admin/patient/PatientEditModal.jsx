import Modal from "../../UI/Modal";
import { styled } from "@mui/material";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import SelectInput from "../../UI/SelectInput";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppointmentToDoctor,
  patientTime,
  patsientt,
} from "../../../utils/constanta";
import { useForm } from "react-hook-form";
import InputDate from "../../UI/InputDate";
import TextAreaInput from "../../UI/TextAreaInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPatient } from "../../../store/patient/patient-thunk";

export const PatientEditModal = ({ onClose, open }) => {
  const { handleSubmit, register, reset } = useForm();
  // const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateOfAppointment, setSelectedDateOfAppointment] =
    useState(null);
  const formattedDate = selectedDate
    ? `${selectedDate.$y}-${String(selectedDate.$M + 1).padStart(
        2,
        "0"
      )}-${String(selectedDate.$D).padStart(2, "0")}`
    : "";
  const formattedDateAppointment = selectedDateOfAppointment
    ? `${selectedDateOfAppointment.$y}-${String(
        selectedDateOfAppointment.$M + 1
      ).padStart(2, "0")}-${String(selectedDateOfAppointment.$D).padStart(
        2,
        "0"
      )}`
    : "";

  // const onSubmit = (data) => {
  //   console.log(data);
  //   try {
  //     const patientData = {
  //       full_name: data.full_name,
  //       birthday: formattedDateAppointment,
  //       date_of_appointment: formattedDate,
  //       recording: 2,
  //       phone_number: data.phone,
  //       gender: data.gender,
  //       address: data.address,
  //       complaints: data.complaints,
  //       time_of_appointment: data.time_of_appointment,
  //     };

  //     dispatch(postPatient(patientData));
  //     onClose();
  //   } catch (error) {
  //     console.error("Error creating patient:", error);
  //   }
  // };
  return (
    <div>
      <Modal open={open} onClose={onClose} borderRadius={"10px"}>
        <>
          <StyleTextDiv>
            <StyledDivMain>
              <h1>Редактировать пациента</h1>
            </StyledDivMain>
          </StyleTextDiv>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <StyledInputs>
            <Div>
              <Input
                {...register("full_name")}
                name="full_name"
                label={"ФИО*"}
                width={"287px"}
                height={"36px"}
              />
              <Input
                {...register("phone")}
                name="phone"
                width={"287px"}
                height={"36px"}
                label={"Телефон*"}
              />
              <Input
                {...register("address")}
                name="address"
                width={"287px"}
                height={"36px"}
                label={"Адрес*"}
              />
              <SelectInput
                {...register("recording")}
                name="recording"
                width={"287px"}
                height={"35px"}
                padding={"7.5px"}
                label={"Запись к врачу*"}
                data={AppointmentToDoctor}
              />
              <InputDate
                padding={"8px 38px 6px 8px"}
                name="date"
                children={"Дата записи*"}
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </Div>
            <DivTwo>
              <SelectInput
                {...register("gender")}
                name="gender"
                label={"Пол*"}
                width={"288px"}
                height={"35px"}
                padding={"7.5px"}
                data={patsientt}
              />
              <InputDate
                padding={"7px 38px 5px 8px"}
                name="date"
                children={"Дата рождения*"}
                value={selectedDateOfAppointment}
                onChange={(date) => setSelectedDateOfAppointment(date)}
              />

              <TextAreaInput
                {...register("complaints")}
                name="complaints"
                label={"Жалобы"}
                width={"265px"}
                height={"98px"}
                borderRadius={"5px"}
                padding={"10px"}
              />
              <Input
                {...register("time_of_appointment")}
                name="time_of_appointment"
                width={"287px"}
                height={"36px"}
                label={"Время*"}
              />
            </DivTwo>
          </StyledInputs>
          <StyledTimeBlock>
            {patientTime.map((el) => (
              <StyledTime key={el.id === 0}>
                <p style={{ width: "97px" }}>{el.time}</p>
              </StyledTime>
            ))}
          </StyledTimeBlock>
          <StyledButtonDiv>
            <Button
              onClick={onClose}
              padding={"8px 20px"}
              borderRadius={"7.3px"}
              background={"#838383"}
              border={"none"}
              color={"white"}
            >
              <StyledSpan>
                <CloseIcon />
                Отмена
              </StyledSpan>
            </Button>
            <Button
              type={"submit"}
              // onClick={handleSaveClick}
              padding={"8px 20px"}
              border={"none"}
              borderRadius={"7.3px"}
              color={"white"}
              background={"#53A8BB"}
            >
              <StyledSpan>
                <AddIcon />
                Сохранить
              </StyledSpan>
            </Button>
          </StyledButtonDiv>
          {/* </form> */}
        </>
      </Modal>
    </div>
  );
};
const StyleTextDiv = styled("div")(() => ({
  width: "710px",
  height: "83px",
  display: "flex",
  marginTop: "-7.5px",
  borderRadius: "10px",
  alignItems: "center",
  background: "#D4EFF3",
  h1: {
    margin: "0",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "29px",
    fontFamily: "Montserrat",
  },
}));
const StyledDivMain = styled("div")(() => ({
  width: "620px",
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  justifyItems: "center",
  justifyContent: "space-between",
}));
const StyledInputs = styled("div")(() => ({
  flex: "grid",
  display: "flex",
  justifyContent: "space-around",
}));
const Div = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  margin: "15px 0 ",
  flexDirection: "column",
}));
const DivTwo = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  margin: "16px 0 ",
  flexDirection: "column",
}));
const StyledButtonDiv = styled("div")(() => ({
  margin: "20px 35px 30px 0 ",
  display: "flex",
  gap: "30px",
  alignItems: "center",
  justifyContent: "end",
}));
const StyledTimeBlock = styled("div")(() => ({
  flexWrap: "wrap",
  display: "flex",
  gap: "18px",
  width: "620px",
  marginLeft: "30px",
}));
const StyledTime = styled("div")(() => ({
  width: "103px",
  height: "35px",
  border: "1px solid #838383 ",
  display: "inline-block",
  alignItems: "center",
  display: "flex",
  textAlign: "center",
  borderRadius: "5px",
  background: "#C2F2FC",
}));
const StyledSpan = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
}));
