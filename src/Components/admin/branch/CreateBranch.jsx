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
import { useParams } from "react-router-dom";
import { postFilial } from "../../../store/filial/filial-thunk";

const CreateBranch = ({ open, onClose, editFormData }) => {
  const { handleSubmit, register, setValue } = useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (open && editFormData) {
      setValue("name", editFormData.name || "");
      setValue("address", editFormData.address || "");
      setValue("director", editFormData.director || "");
      setValue("phone_number", editFormData.phone_number || "");
    }
  }, [open, editFormData]);

  const onSubmit = async (data) => {
    const branchData = {
      name: data.name,
      address: data.address,
      director: 1,
      phone_number: data.phone_number,
    };

    try {
      if (editFormData) {
        // If editFormData is provided, it's an edit operation
        // await dispatch(patchFilialReq(id, data)); // Assuming you have the id of the branch to edit
      } else {
        // If editFormData is not provided, it's a create operation
        await dispatch(postFilial(branchData));
      }
      onClose();
    } catch (error) {
      console.error("Error creating/editing branch:", error);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={onClose} borderRadius={"8px"}>
        <>
          <StyledBox>
            <h2>
              {editFormData ? "Редактировать филиала" : "Создать новый филиал"}
            </h2>
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
                  {editFormData ? "Сохранить" : "Создать"}
                </span>
              </Button>
            </StyledButtonDiv>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default CreateBranch;

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
