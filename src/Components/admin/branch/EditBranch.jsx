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
import { patchFilialReq } from "../../../service/filial";
import { useParams } from "react-router-dom";

const EditBranch = ({ open, onClose }) => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const [editFormData, setEditFormData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (open) {
      setValue(
        "name",
        editFormData.name,
        "address",
        editFormData.address,
        "director",
        editFormData.director,
        "phone_numbe",
        editFormData.phone_numbe
      );
    }

    console.log(editFormData.name);
    console.log("m xasndkquduqfdi");
  }, [open]);
  const onSubmit = async (branchEdit) => {
    setEditFormData(branchEdit);

    try {
      const edit = await dispatch(patchFilialReq(filialId, branchEdit));
      return edit;
    } catch (error) {
      console.log("not found");
    }
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
                  {...register("name")}
                  label={"Название филиала*"}
                />
                <Input
                  {...register("address")}
                  width={"287px"}
                  height={"35px"}
                  label={"Адрес*"}
                  borderRadius={"4px"}
                />
              </Div>
              <DivTwo>
                <SelectInput
                  {...register("director")}
                  data={AppointmentToDoctor}
                  label={"Директор*"}
                  width={"287px"}
                  padding={"6px 0"}
                />
                <Input
                  width={"287px"}
                  {...register("phone_number")}
                  height={"35px"}
                  label={"Телефон*"}
                  borderRadius={"4px"}
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
