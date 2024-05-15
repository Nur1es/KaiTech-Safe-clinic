import React, { useEffect, useState } from "react";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import SelectInput from "../../UI/SelectInput";
import Button from "../../UI/Button";
import { Box, styled } from "@mui/material";
import { AppointmentToDoctor } from "../../../utils/constanta";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { patchFilial } from "../../../store/filial/filial-thunk";

const EditBranch = ({ open, onClose, editFormData }) => {
  const [form, setForm] = React.useState(
    editFormData || {
      name: "",
      address: "",
      director: "",
      phone_number: "",
      id: 0,
    }
  );
  const { handleSubmit, register } = useForm({ defaultValues: editFormData });
  const dispatch = useDispatch();
  console.log(form);

  const onSubmit = async (data) => {
    const editData = {
      name: data.name,
      address: data.address,
      director: data.director,
      phone_number: data.phone_number,
      id: data.id,
    };
    try {
      console.log(editData);
      const edit = await dispatch(patchFilial(editData));
      return edit;
    } catch (error) {
      console.log("not found");
    }
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((prevDefault) => ({ ...prevDefault, [name]: value }));
  };
  return (
    <div>
      <Modal open={open} onClose={onClose} borderRadius={"8px"}>
        <>
          <StyledBox>
            <h2>Редактировать филиала</h2>
          </StyledBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledBoxTwo>
              <Div>
                <Input
                  width={"287px"}
                  height={"35px"}
                  borderRadius={"4px"}
                  label={"Название филиала*"}
                  {...register("name")}
                  name="name"
                  value={form.name}
                  onChange={handleChangeInput}
                />
                <Input
                  {...register("address")}
                  width={"287px"}
                  height={"35px"}
                  label={"Адрес*"}
                  borderRadius={"4px"}
                  name="address"
                  value={form.address}
                  onChange={handleChangeInput}
                />
              </Div>
              <DivTwo>
                <SelectInput
                  {...register("director")}
                  data={AppointmentToDoctor}
                  label={"Директор*"}
                  width={"287px"}
                  padding={"6px 0"}
                  name="director"
                  value={form.director}
                  onChange={handleChangeInput}
                />
                <Input
                  width={"287px"}
                  {...register("phone_number")}
                  height={"35px"}
                  label={"Телефон*"}
                  borderRadius={"4px"}
                  name="phone_number"
                  onChange={handleChangeInput}
                  value={form.phone_number}
                />
              </DivTwo>
            </StyledBoxTwo>
            <StyledButtonDiv>
              <Button
                onClick={onClose}
                padding={"8px 20px"}
                borderRadius={"7.3px"}
                background={"#838383"}
                border={"none"}
                color={"white"}
              >
                <span>
                  <CloseIcon />
                  Отмена
                </span>
              </Button>
              <Button
                type={"submit"}
                padding={"8px 20px"}
                border={"none"}
                borderRadius={"7.3px"}
                color={"white"}
                background={"#53A8BB"}
              >
                <span>
                  <AddIcon />
                  Сохранить
                </span>
              </Button>
            </StyledButtonDiv>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default EditBranch;
const StyledBox = styled(Box)(() => ({
  width: "710px",
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
const StyledBoxTwo = styled(Box)(() => ({
  display: "flex",
  margin: "25px 0",
  alignItems: "center",
  justifyContent: "space-around",
}));
const Div = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
const DivTwo = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "3px",
}));
const StyledButtonDiv = styled("div")(() => ({
  margin: "35px 35px 30px 0 ",
  display: "flex",
  gap: "30px",
  alignItems: "center",
  justifyContent: "end",
  span: { display: "flex", alignItems: "center" },
}));
