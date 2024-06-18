import { desktopMenuItems, INavLink } from "@/consts/navLinksItems";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const DesktopNav = () => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <List
      component="nav"
      aria-label="Desktop navigation list"
      disablePadding
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "row",
        gap: "30px",
      }}
    >
      {desktopMenuItems.map(({ label, icon: Icon, href }: INavLink) => (
        <NavLink
          key={`desktop-navigation-link-${label}`}
          to={href}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem
            sx={{
              transition: "color 0.3s",
              color:
                location.pathname === href
                  ? theme.palette.primary.dark
                  : theme.palette.primary.main,
              "&:hover": {
                color: "black",
              },
              "&:active": {
                color: "black",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <Icon />
            </ListItemIcon>
            <ListItemText
              primary={label}
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

export default DesktopNav;
