import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import * as styles from "./styles";

interface ICustomModal {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ open, onClose, children }: ICustomModal) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={styles.modalInnerBox}>{children}</Box>
  </Modal>
);

export default CustomModal;
