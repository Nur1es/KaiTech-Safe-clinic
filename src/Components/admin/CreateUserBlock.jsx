import React, { useState } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import InputDate from "../UI/InputDate";
import SelectInput from "../UI/SelectInput";
import { doctors, pol } from "../../utils/constanta";
import addImg from "../../assets/icon/newAddImg.svg";
import { useDispatch } from "react-redux";
import { postDoctor } from "../../store/doctors/doctors-thunk";

const CreateUserBlock = ({ onClose, open }) => {
  const { register, handleSubmit } = useForm();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const dispatch = useDispatch();

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

  const handlePostHandler = (data) => {
    try {
      const doctorsData = {
        username: data.name,
        tag: data.tegs,
        gender: data.pol,
        email: data.email,
        address: data.address,
        login: data.email,
        password: data.number,
        client: data.number,
        birthday: formattedDate,
      };
      dispatch(postDoctor(doctorsData));
    } catch (error) {
      console.error("Error creating doctors:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPhoto(reader.result);
        setPhotos([...photos, selectedPhoto]);
        setSelectedPhoto(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Modal
          open={open}
          width={"710px"}
          borderRadius={"10px"}
          onClose={onClose}
        >
          <form onSubmit={handleSubmit(handlePostHandler)}>
            <StyleTextDiv>
              <StyledDivMain>
                <h1>Создать нового врача</h1>
              </StyledDivMain>
            </StyleTextDiv>
            <InputAddimg>
              {(selectedPhoto && (
                <img
                  style={{ height: "70px", width: "70px", borderRadius: "3px" }}
                  src={selectedPhoto}
                  alt="Выбранное фото"
                />
              )) || <img htmlFor="AddImg" src={addImg} />}
              <label style={{ cursor: "pointer" }} htmlFor="AddImg">
                Добавить фото*
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                id="AddImg"
                style={{ display: "none" }}
              />
            </InputAddimg>
            <StyledInputs>
              <InputBlock>
                <Input
                  label={"ФИО*"}
                  width={"287px"}
                  height={"35px"}
                  name="name"
                  {...register("name")}
                />
                <InputDate
                  padding={"8px 38px 6px 8px"}
                  name="date"
                  children={"Дата записи*"}
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />

                <SelectInput
                  label={"Теги*"}
                  width={"287px"}
                  height={"35px"}
                  margin={0}
                  data={doctors}
                  {...register("tegs")}
                  name={"tegs"}
                />
                <SelectInput
                  label={"Пол*"}
                  width={"287px"}
                  height={"35px"}
                  data={pol}
                  {...register("pol")}
                  name={"pol"}
                />
              </InputBlock>
              <InputBlock2>
                <Input
                  label={"Email*"}
                  width={"287px"}
                  height={"35px"}
                  name="login"
                  {...register("email")}
                />
                <Input
                  label={"Адрес*"}
                  width={"287px"}
                  height={"35px"}
                  name="login"
                  {...register("address")}
                />
                <Input
                  label={"Телефон*"}
                  width={"287px"}
                  height={"35px"}
                  name="login"
                  {...register("number")}
                />
              </InputBlock2>
            </StyledInputs>
            <div
              style={{
                margin: "15px 55px 30px 0 ",
                display: "flex",
                gap: "30px",
                justifyContent: "end",
              }}
            >
              <Button
                padding={"0 20px 0 0"}
                borderRadius={"7.3px"}
                border={"none"}
                background={"#838383"}
                color={"white"}
                onClick={onClose}
              >
                <IconButton sx={{ color: "white" }} onClick={onClose}>
                  <CloseIcon onClick={onClose} />
                </IconButton>
                Отмена
              </Button>

              <Button
                padding={"0 20px 0 5px"}
                borderRadius={"7.3px"}
                border={"none"}
                color={"white"}
                background={"#53A8BB"}
              >
                Создать пользователя
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default CreateUserBlock;

const InputAddimg = styled("div")(() => ({
  width: "125px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  padding: "20px 0px 0px 35px",
  textAlign: "center",
  fontSize: "11px",
}));

const StyleTextDiv = styled("div")(() => ({
  width: "710px",
  height: "83px",
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
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
const InputBlock = styled("div")(() => ({
  height: "310px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}));
const InputBlock2 = styled("div")(() => ({
  height: "230px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}));

const StyledInputs = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "start",
  marginTop: "28px",
  padding: "0 0 30px 0",
}));

const Div = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  margin: "20px 0 ",
  border: "1px solid",
  flexDirection: "row",
}));
