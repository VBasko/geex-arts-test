import { useState } from "react";

import { Box, IconButton } from "@mui/material";
import MenuDrawer from "./menu-drawer";
import MenuIcon from "@/components/ui/icons/menu-icon";

const MobileNav = () => {
  const [isMenuDrawerOpened, setIsMenuDrawerOpened] = useState(false);

  return (
    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
      <IconButton
        color="inherit"
        aria-label="Open mobile menu"
        onClick={() => setIsMenuDrawerOpened(true)}
      >
        <MenuIcon />
      </IconButton>

      <MenuDrawer
        open={isMenuDrawerOpened}
        onClose={() => setIsMenuDrawerOpened(false)}
      />
    </Box>
  );
};

export default MobileNav;
