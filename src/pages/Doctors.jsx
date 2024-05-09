import React, { useEffect, useState } from "react";
import CreateUserBlock from "../Components/admin/CreateUserBlock";
import { DelModal } from "../Components/UI/DelModal";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../store/doctors/doctors-thunk";
import TableTest from "../Components/UI/TableTest";

const Doctors = () => {
  const [open, setOpen] = useState(false);
  const [del, setDel] = useState(false);
  const dispatch = useDispatch();
  const { doctor } = useSelector((s) => s.doctor);

  const handleClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleClickDel = () => {
    setDel(true);
  };
  const onCloseDel = () => {
    setDel(false);
  };

  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);

  const doctorColumns = ["Имя", "Логин", "Теги", "Клиенты", "Действия"];

  return (
    <div>
      <DelModal onClose={onCloseDel} open={del} />
      <CreateUserBlock onClose={onClose} open={open} />
      <TableTest
        tableData={doctor.results}
        tableHeadData={doctorColumns}
        tableTitle={"Список врачей"}
        tableCreate={handleClick}
        tableEdit={""}
        tableDelete={handleClickDel}
        tableInfo={""}
      />
      
    </div>
  );
};

export default Doctors;
