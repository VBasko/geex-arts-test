import { NavLink } from "react-router-dom";
import { useAuth } from "@/api/auth-context";

import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";

import {
  INavLink,
  mobileMenuItemsStack1,
  mobileMenuItemsStack2,
} from "@/consts/navLinksItems";

import BellIcon from "@/components/ui/icons/bell-icon";
import CloseIcon from "@/components/ui/icons/close-icon";
import logo from "@/assets/logo.svg";

import * as styles from "./styles";
import UserProfile from "./user-profile";
import { Container } from "@mui/material";
import LangSwitcher from "@/components/lang-switcher";

interface IMenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const FAKE_NOTIFICATIONS_LENGTH: number = 1;

const MenuDrawer = ({ open, onClose }: IMenuDrawerProps) => {
  const { isLoggedIn } = useAuth();

  return (
    <Drawer anchor="left" open={open} onClose={onClose} sx={styles.drawer}>
      <Container>
        <Box sx={styles.drawerHeader}>
          <img src={logo} alt="SportRec logo" />

          <IconButton aria-label="Close mobile menu" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Container>

      <Container sx={{ paddingY: "24px", color: "#9395B8" }}>
        <List
          component="nav"
          aria-label="Mobile navigation list"
          disablePadding
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {isLoggedIn && <UserProfile onCloseDrawer={() => onClose()} />}

          {mobileMenuItemsStack1.map(
            ({ label, icon: Icon, href }: INavLink) => (
              <NavLink
                to={href}
                key={label}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem onClick={onClose}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </ListItem>
              </NavLink>
            )
          )}

          {isLoggedIn && (
            <ListItem onClick={onClose}>
              <ListItemIcon>
                <Badge
                  variant="dot"
                  invisible={FAKE_NOTIFICATIONS_LENGTH < 1}
                  color="error"
                >
                  <BellIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary="Уведомления"
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
          )}

          {mobileMenuItemsStack2.map(
            ({ label, icon: Icon, href }: INavLink) => (
              <NavLink
                to={href}
                key={label}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem onClick={onClose}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </ListItem>
              </NavLink>
            )
          )}

          <ListItem>
            <LangSwitcher />
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
};

export default MenuDrawer;
