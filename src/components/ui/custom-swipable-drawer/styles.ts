export const bottomPuller = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  width: 135,
  height: 5,
  margin: "0 auto 8px",
  backgroundColor: "black",
  borderRadius: 100,
  cursor: "grab",
  zIndex: 9999,
  pointerEvents: "none",
};

export const topPuller = {
  position: "absolute",
  top: -13,
  left: 0,
  right: 0,
  width: 56,
  height: 5,
  borderRadius: 100,
  margin: "0 auto",
  backgroundColor: "#F1F3F7",
};

export const innerPaper = {
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  padding: "24px",
  overflowY: "unset",
  height: "min(485px, 90vh)",
};
