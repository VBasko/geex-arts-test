export const select = {
  outline: "none",
  border: "none",
  cursor: "pointer",

  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: 0,
    paddingRight: "24px !important",
    fontWeight: "inherit",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

export const iconWrapper = {
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  height: "100%",
};
