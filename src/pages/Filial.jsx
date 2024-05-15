import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteFilialReq, patchFilialReq } from "../service/filial";
import { getFilial } from "../store/filial/filial-thunk";
import TableTest from "../Components/UI/TableTest";

import BranchInfo from "../Components/admin/branch/BranchInfo";
import CreateBranch from "../Components/admin/branch/CreateBranch";
import EditBranch from "../Components/admin/branch/EditBranch";
import { DelModal } from "../Components/UI/DelModal";

const Filial = () => {
  const { branch } = useSelector((s) => s.branch);
  const [branchOneInfo, setBranchOneInfo] = React.useState({});
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [editFormData, setEditFormData] = React.useState({});
  const [del, setDel] = React.useState(false);
  const [info, setInfo] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [filialId, setFilialId] = React.useState();

  const handleCreateBranch = () => {
    setOpen(true);
    dispatch(getFilial());
  };
  const handleEditBranch = (id) => {
    setEdit(true);
    setEditFormData(branch.results.find((item) => item.id === id));
  };
  const handleDeltBranch = async (id) => {
    setDel(true);
    setFilialId(id);
  };
  const handleInfoBranch = async (id) => {
    setInfo(true);
    try {
      fetch(`http://157.245.202.197/branch/${id}`)
        .then((res) => res.json())
        .then((res) => setBranchOneInfo(res));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteChangeFilial = async () => {
    try {
      const response = await deleteFilialReq(filialId);
      if (response) {
        dispatch(getFilial());
      }
      onCloseDel();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeEdit = async () => {
    try {
      const dataEdit = await patchFilialReq(filialId);
      return dataEdit;
    } catch (error) {
      console.log("error");
    }
  };

  const onClose = () => {
    setOpen(false);
  };
  const onCloseDel = () => {
    setDel(false);
  };
  const onCloseInfo = () => {
    setInfo(false);
  };
  const onCloseEdit = () => {
    setEdit(false);
  };

  React.useEffect(() => {
    dispatch(getFilial());
  }, [dispatch]);

  const filialColumns = ["Название", "Адрес", "Директор", "Действия"];

  return (
    <div style={{ width: "1160px" }}>
      <DelModal
        open={del}
        filialId={filialId}
        onClose={onCloseDel}
        deleteChangeHandler={deleteChangeFilial}
      />
      <CreateBranch onClose={onClose} open={open} />
      <BranchInfo onClose={onCloseInfo} open={info} element={branchOneInfo} />
      <EditBranch
        filialId={filialId}
        editFormData={editFormData}
        handleEditBranch={handleChangeEdit}
        onClose={onCloseEdit}
        open={edit}
      />
      <TableTest
        tableData={branch.results}
        tableHeadData={filialColumns}
        tableTitle={"Мои Филиалы"}
        tableCreate={handleCreateBranch}
        tableEdit={handleEditBranch}
        tableDelete={handleDeltBranch}
        tableInfo={handleInfoBranch}
      />
    </div>
  );
};

export default Filial;
