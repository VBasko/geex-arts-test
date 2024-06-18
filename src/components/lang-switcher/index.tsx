import { useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import ChevronDownIcon from "@/components/ui/icons/chevron-down-icon";
import flagRu from "@/assets/flag-ru.png";
import flagEng from "@/assets/flag-eng.png";

import * as styles from "./styles";

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
        sx={styles.select}
        MenuProps={{ sx: { boxShadow: "none" } }}
        IconComponent={() => (
          <Box sx={styles.iconWrapper}>
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
