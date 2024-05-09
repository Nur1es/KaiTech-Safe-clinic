import React from "react";
import { Box, Modal as MuiModal, styled } from "@mui/material";


const Modal = (({ width, borderRadius, children,onClick, open, onClose }) => {
  const style = {
    width,
    top: "50%",
    left: "50%",
    borderRadius,
    boxShadow: 24,
    position: "absolute",
    bgcolor: "background.paper",
    transform: "translate(-50%, -50%)",
  };
  
  return (
    <div>
      <StyledModal
        open={open}
        onClick={onClick}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        borderRadius={borderRadius}
      >
        <Box sx={style}>{children}</Box>
      </StyledModal>
    </div>
  );
});

export default Modal;

const StyledModal = styled(MuiModal)(({ borderRadius, width }) => ({
  ".css-1gkse3u ": {
    border: "none",
    borderRadius,
    width: width,
  },
  ".css-1wnsr1i ": {
    outline: "none",
    border: "none",
    width: width,
  },
}))
