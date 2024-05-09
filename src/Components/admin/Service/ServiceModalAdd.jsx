import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import addImg from "../../../assets/icon/addImageIcon.svg";
// import SelectInput from "../../UI/SelectInput";

const ServiceModalAdd = ({ onClose, open }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Выводим данные в консоль
    console.log("Submitted data:", data);
    // Сбрасываем значения формы после отправки
    reset();
  };

  const handleCreateUser = () => {
    // Вызываем onSubmit только при нажатии кнопки "Создать пользователя"
    handleSubmit(onSubmit)();
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Modal
          open={open}
          onClose={onClose}
          width={"710px"}
          borderRadius={"10px"}
        >
          <>
            <StyleTextDiv>
              <StyledDivMain>
                <h1>Создать новые услуги</h1>
              </StyledDivMain>
            </StyleTextDiv>
            <form>
              <InputBlock>
                <InputAddimg>
                  <img
                    style={{ height: '50px', width: '60px', borderRadius: '3px' }}
                    src={addImg}
                    alt='Выбранное фото'
                  />
                  <label style={{ cursor: 'pointer' }} htmlFor='AddImg'>Добавить фото*</label>
                  <input type="file" {...register("photo")} id="AddImg" style={{ display: 'none' }} />
                </InputAddimg>
                <InputBlockMini>
                  <Input label={"Название услуги*"} width='287px' height='35px' {...register("serviceName")} />
                  <Input label={"Цена*"} width='287px' height='35px' {...register("price")} />
                </InputBlockMini>
                <InputBlockMini>
                  <Input
                    label={"Описание услуги*"}
                    placeholder='Описание услуги'
                    width='287px'
                    height='65px'
                    {...register("description")}
                  />
                  {/* <SelectInput label={"Категория*"} width='287px' height='35px' marginTop={'14px'} {...register("category")} /> */}
                </InputBlockMini>
              </InputBlock>
              <div
                style={{
                  margin: "15px 55px 30px 0 ",
                  display: "flex",
                  gap: "30px",
                  justifyContent: "end",
                }}
              >
                <Button
                  type="button"
                  onClick={onClose}
                  padding={"0 20px 0 0"}
                  borderRadius={"7.3px"}
                  border={"none"}
                  background={"#838383"}
                  color={"white"}
                >
                  <IconButton sx={{ color: "white" }}>
                    <CloseIcon />
                  </IconButton>
                  Отмена
                </Button>
                <Button
                  type="button"
                  onClick={handleCreateUser} // Вызываем функцию handleCreateUser при нажатии кнопки
                  padding={"0 20px 0 5px"}
                  borderRadius={"7.3px"}
                  border={"none"}
                  color={"white"}
                  background={"#53A8BB"}
                >
                  <IconButton sx={{ color: "white" }}>
                    <AddIcon />
                  </IconButton>
                  Создать пользователя
                </Button>
              </div>
            </form>
          </>
        </Modal>
      </div>
    </div>
  );
};

export default ServiceModalAdd;

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
  height: "260px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "10px 35px",
}));

const InputBlockMini = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));
const InputAddimg = styled("div")(() => ({
  width: '125px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  textAlign: 'center',
  fontSize: '11px',
}));
