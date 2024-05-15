import React from "react";
import EmailIcon from "../../assets/icon/EmailIcon.svg";
import IconClose from "../../assets/icon/IconClose.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import {
  IconButton,
  InputAdornment,
  FormControl,
  Box,
  styled,
  OutlinedInput,
} from "@mui/material";
import Button from "../UI/Button";

const AuthSignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <StyledContainerBox>
        <StyledDivBlock>
          <img src="/img/Safety.png" alt="" />
          <h1>safe.clinic</h1>
        </StyledDivBlock>
        <StyledBoxText>
          <h6>Вход на веб приложение</h6>
          <p>Все условия для вашей безопасности</p>
        </StyledBoxText>
        <Box sx={{ display: "flex", marginRight: "60px" }}>
          <div>
            <div style={{ marginTop: "15px" }}>
              <StyledLabel>Name *</StyledLabel>
              <StyledSelectBoxTwo>
                <img src={EmailIcon} alt="" />
                <StyledInput />
              </StyledSelectBoxTwo>
            </div>
            <div style={{ marginTop: "15px" }}>
              <StyledLabel>Логин *</StyledLabel>
              <StyledSelectBoxTwo>
                <img src={EmailIcon} alt="" />
                <StyledInput />
              </StyledSelectBoxTwo>
            </div>
            <Box sx={{ marginTop: "15px" }}>
              <StyledLabel>Пароль *</StyledLabel>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledBoxImg src={IconClose} alt="" />
                <StyledFormControl sx={{ width: "230px" }}>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    // {...register("password", { required: true })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </StyledFormControl>
              </Box>
            </Box>
            <div style={{ margin: "20px 0 0 55px" }}>
                <Button
                  padding="10px 50px"
                  color={"white"}
                  borderRadius={"3.12px"}
                  border={"solid 1px #53A8BB"}
                  background={"#53A8BB"}
                  fontSize={"14px"}
                  fontWeight={500}
                  type="submit"
                >
                  Войти на сайт
                </Button>
            </div>
          </div>
        </Box>
      </StyledContainerBox>
    </Box>
  );
};

export default AuthSignIn;
const StyledContainerBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "727px",
  // marginTop: "50px",
  background: "white",
}));
const StyledDivBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // margin:"",
  img: {
    width: "49px",
    height: "61px",
    marginTop: "15px",
  },
  h1: {
    fontFamily: "Montserrat Alternates",
    fontSize: "79px",
    fontWeight: 600,
    lineHeight: "96px",
    letterSpacing: "0em",
    width: "407px",
    height: "96px",
    color: "#53A8BB",
    margin: "0 0 0 20px",
  },
}));
const StyledBoxText = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  h6: {
    Width: "450px",
    Height: "39px",
    fontFamily: "Montserrat",
    fontSize: "26px",
    fontWeight: 500,
    margin: "0 70px 0 0",
  },
  p: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "34px",
    width: "400px",
    margin: "0 70px 0 0",
  },
}));
const StyledLabel = styled("label")(() => ({
  fontFamily: "Montserrat",
  fontSize: "15px",
  fontWeight: 500,
  lineHeight: "25px",
}));
const StyledSelectBox = styled(Box)(() => ({
  display: "flex",
  img: {
    background: "#E9ECEF",
    padding: "13px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    border: "solid 1.5px #CED4DA",
  },
}));
const StyledSelectBoxTwo = styled(Box)(() => ({
  display: "flex",
  img: {
    background: "#E9ECEF",
    padding: "14.5px",
    borderTopLeftRadius: "5px",
    border: "solid 1.5px #CED4DA",
    borderBottomLeftRadius: "5px",
  },
}));
const StyledBoxImg = styled("img")(() => ({
  background: "#E9ECEF",
  padding: "18.5px",
  borderTopLeftRadius: "5px",
  border: "solid 1.5px #CED4DA",
  borderBottomLeftRadius: "5px",
}));
const StyledInput = styled(TextField)(() => ({
  width: "230px",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#CED4DA",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
}));
const StyledFormControl = styled(FormControl)(() => ({
  padding: "7.9px 0",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#CED4DA",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
}));
