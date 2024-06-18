import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

import { filters, IFilter } from "@/consts/filters";
import { useState } from "react";

const Filters = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        paddingX: "20px",
        paddingY: "24px",
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography variant="h2">Фильтр ленты</Typography>

      <List
        disablePadding
        sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {filters.map(({ icon: Icon, label }: IFilter, index) => {
          return (
            <ListItemButton
              key={label}
              selected={activeButtonIndex === index}
              onClick={() => setActiveButtonIndex(index)}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Filters;
