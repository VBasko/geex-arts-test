import React, { useState } from "react";
import { useAuth } from "@/api/auth-context";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  List,
  ListSubheader,
  Avatar,
  ListItemButton,
} from "@mui/material";
import ChevronDownIcon from "@/components/ui/icons/chevron-down-icon";

interface IUserProfile {
  onCloseDrawer: () => void;
}

const UserProfile = ({ onCloseDrawer }: IUserProfile) => {
  const { user, logout } = useAuth();
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  const handleUserProfileClick = () => {
    setUserProfileOpen(!userProfileOpen);
  };

  const handleLogout = () => {
    logout();
    onCloseDrawer();
  };

  return (
    <>
      <ListItem
        onClick={handleUserProfileClick}
        sx={{ padding: "8px", gap: "10px" }}
      >
        <ListItemIcon>
          <Avatar alt={user?.displayName} src={user?.avatar} />
        </ListItemIcon>
        <ListItemText
          primary="Мой профиль"
          primaryTypographyProps={{ variant: "body1" }}
        />
        <IconButton
          sx={{
            color: "#9395B8",
            transform: `${userProfileOpen ? "rotate(180deg)" : ""}`,
          }}
        >
          <ChevronDownIcon />
        </IconButton>
      </ListItem>

      <Collapse in={userProfileOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListSubheader>{user?.displayName}</ListSubheader>
          <ListItemButton sx={{ pl: 4 }} onClick={handleLogout}>
            <ListItemText primary="Выйти" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default UserProfile;
