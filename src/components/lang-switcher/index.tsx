import {
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
  SelectChangeEvent,
  Box,
  FormControl,
} from "@mui/material";
import ChevronDownIcon from "../ui/icons/chevron-down-icon";
import flagRu from "@/assets/flag-ru.png";
import flagEng from "@/assets/flag-eng.png";
import { useState } from "react";

type Languages = "ru" | "en";

interface ILanguage {
  code: Languages;
  icon: string;
  label: string;
}

const LANGUAGES: ILanguage[] = [
  { code: "ru", icon: flagRu, label: "RU" },
  { code: "en", icon: flagEng, label: "ENG" },
];

const LangSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Languages>("ru");

  const handleLanguageChange = (event: SelectChangeEvent<Languages>) => {
    setCurrentLanguage(event.target.value as Languages);
  };

  return (
    <FormControl sx={{ minWidth: "69px", flexGrow: 1 }}>
      <Select
        disabled={true}
        autoWidth
        aria-label="Language selection"
        value={currentLanguage}
        onChange={handleLanguageChange}
        sx={{
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
        }}
        MenuProps={{ sx: { boxShadow: "none" } }}
        IconComponent={() => (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              pointerEvents: "none",
              height: "100%",
            }}
          >
            <ChevronDownIcon />
          </Box>
        )}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            value={lang.code}
            disabled={lang.code !== "ru"}
          >
            <ListItemIcon>
              <img src={lang.icon} alt={lang.label} width={20} />
            </ListItemIcon>
            <ListItemText
              primary={lang.label}
              sx={{ margin: 0, flex: "auto" }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LangSwitcher;
