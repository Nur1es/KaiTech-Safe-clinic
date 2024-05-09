import React, { useState } from "react";
import ServiceModalAdd from "../Components/admin/Service/ServiceModalAdd";
import { DelModal } from "../Components/UI/DelModal";
import TableTest from "../Components/UI/TableTest";

const Service = () => {
  const [open, setOpen] = useState(false);
  const [del, setDel] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleClickDel = () => {
    setDel(true);
    console.log("cfyvubyuijp");
  };
  const onCloseDel = () => {
    setDel(false);
  };

  const serviceColumns = [
    "Название услуги",
    "Описание",
    "Стоимость",
    "Действия",
  ];
  return (
    <div style={{width:"1160px"}}>
      <DelModal onCloseDel={onCloseDel} open={del} />
      <ServiceModalAdd onClose={onClose} open={open} />

      <TableTest
        tableData={[]}
        tableHeadData={serviceColumns}
        tableTitle={"Услуги"}
        tableCreate={""}
        tableEdit={""}
        tableDelete={""}
        tableInfo={""}
      />
    </div>
  );
};

export default Service;
