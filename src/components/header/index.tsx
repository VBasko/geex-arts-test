import { NavLink } from "react-router-dom";

import { useAuth } from "@/api/auth-context";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import UserSection from "./user-section";
import Login from "@/components/login";

import logo from "@/assets/logo.svg";

import * as styles from "./styles";

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
