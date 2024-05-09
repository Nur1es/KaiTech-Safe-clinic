import React, { useEffect, useState } from "react";
import { DelModal } from "./../Components/UI/DelModal";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "./../store/patient/patient-thunk";
import InfoPatient from "../Components/admin/patient/InfoPatient";
import { PatientEditModal } from "./../Components/admin/patient/PatientEditModal";
import { CreatePatientModal } from "../Components/admin/patient/CreatePatientModal";
import { delPatientReq } from "../service/patient";
import { getDoctor } from "./../store/doctors/doctors-thunk";
import TableTest from "../Components/UI/TableTest";


const Patient = () => {
  const dispatch = useDispatch();
  const [patientId, setPatientId] = useState();
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const { patient } = useSelector((s) => s.patient);

  const handleClick = () => {
    setOpen(true);
    dispatch(getDoctor());
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleClickDel = async (id) => {
    setDel(true);
    setPatientId(id);
  };

  const onCloseDel = () => {
    setDel(false);
  };
  const deleteChangeHandler = async () => {
    try {
      const res = await delPatientReq(patientId);
      if (res) {
        dispatch(getPatient());
      }

      onCloseDel();
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickInfo = () => {
    setInfoOpen(true);
  };
  const onCloseInfo = () => {
    setInfoOpen(false);
  };
  const handleClickEdit = () => {
    setEdit(true);
  };
  const onClickEdit = () => {
    setEdit(false);
  };
  useEffect(() => {
    dispatch(getPatient());
  }, [dispatch]);

  const patientColumns = [
    "Имя",
    "Телефон",
    "Адрес",
    "Дата посещения",
    "Действия",
  ];
  return (
    <div>
      <DelModal
        onClose={onCloseDel}
        open={del}
        deleteChangeHandler={deleteChangeHandler}
        patientId={patientId}
      />
      <CreatePatientModal onClose={onClose} open={open} />
      <PatientEditModal onClose={onClickEdit} open={edit} />
      <InfoPatient onClose={onCloseInfo} open={infoOpen} />
      <TableTest
        tableData={patient}
        tableHeadData={patientColumns}
        tableTitle={"Список пациент"}
        tableCreate={handleClick}
        tableEdit={handleClickEdit}
        tableDelete={handleClickDel}
        tableInfo={handleClickInfo}
      />
    </div>
  );
};

export default Patient
