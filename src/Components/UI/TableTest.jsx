import PropTypes from "prop-types";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { styled } from "styled-components";
import dalete from "../../assets/icon/dalete.svg";
import edit from "../../assets/icon/edit.svg";

export default function TableTest({
  tableData,
  tableHeadData,
  tableTitle,
  tableCreate,
  tableEdit,
  tableDelete,
  tableInfo,
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{ overflow: "none", boxShadow: "none" }}
    >
      <TableBox>
        <Gggg>
          <TableTitle>{tableTitle || "None"}</TableTitle>
          <TitleButton onClick={() => tableCreate()}>+ Добавить</TitleButton>
        </Gggg>

        <BoxTitle style={{ borderBottom: "1px solid #bbbbbb" }}>
          {tableHeadData.map((str, i) => (
            <TitleString style={{ width: "auto" }} key={i}>
              {str}
            </TitleString>
          ))}
        </BoxTitle>
      </TableBox>

      <TableBox>
        {tableData ? (
          tableData.map((obj) => (
            <BoxTitle key={obj.id}>
              <TitleString
                onClick={() => tableInfo(obj.id)}
                style={{
                  fontSize: "16px",
                  color: "rgb(0,0,0)",
                  cursor: "pointer",
                }}
              >
                {obj.name}
              </TitleString>

                 
              <TitleString style={{ fontSize: "16px",  color: "#5B5B98" }}>
                {obj.address}
              </TitleString>

              <TitleString
                style={{
                  fontSize: "16px",
                  color: "#5B5B98",
                  fontWeight: "600",
                }}
              >
                {obj.director}
              </TitleString>

              <ActionBlock>
                <ActionBtn>
                  <img
                    onClick={() => tableEdit(obj.id)}
                    src={edit}
                    alt="edit"
                  />
                </ActionBtn>

                <ActionBtn onClick={() => tableDelete(obj.id)}>
                  <img src={dalete} alt="" />
                </ActionBtn>
              </ActionBlock>
            </BoxTitle>
          ))
        ) : (
          <NoData>Нет Данных 🤨</NoData>
        )}
      </TableBox>
    </TableContainer>
  );
}

TableTest.propTypes = {
  tableData: Array,
  tableHeadData: Array,
  tableTitle: String,
  tableCreate: PropTypes.func,
  tableEdit: PropTypes.func,
  tableDelete: PropTypes.func,
  tableInfo: PropTypes.func,
};

const Gggg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  margin-top: 25px;
  padding-bottom: 9px;
  border-bottom: 2px solid #eef0f7;
`;
const TableTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
`;
const TitleButton = styled.button`
  color: white;
  background-color: #53a8bb;
  border-radius: 7.3px;
  border: none;
  width: 200px;
  height: 45px;
  cursor: pointer;
  font-size: 13px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  margin: 0 0 0 600px;
`;
const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
  padding: 0 15px 16px 15px;
`;
const TitleString = styled.h1`
  width: 200px;
  text-align: start;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
`;
const ActionBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
const ActionBlock = styled.div`
  width: 46px;
  height: 23px;
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
`;
const TableBox = styled.div`
  width: 1160px;
`;
const NoData = styled.div`
  text-align: center;
  margin: 40px 0;
  font-size: 20px;
`;
