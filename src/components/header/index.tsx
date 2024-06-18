import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Login from "@/components/login";
import { useAuth } from "@/api/auth-context";
import logo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";

import * as styles from "./styles";
import { Box, Container } from "@mui/material";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import UserSection from "./user-section";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Container>
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <NavLink to="/" aria-label="Go to homepage">
              <img src={logo} alt="SportRec logo" />
            </NavLink>

            <DesktopNav />
          </Box>

          <MobileNav />

          <UserSection />
        </Toolbar>
      </Container>

      {!isLoggedIn && <Login />}
    </AppBar>
  );
};

export default Header;
