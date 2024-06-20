import { useState } from "react";
import { useAuth } from "@/api/auth-context";

import theme from "@/theme";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import LangSwitcher from "@/components/lang-switcher";
import UserIcon from "@/components/ui/icons/user-icon";
import BellIcon from "@/components/ui/icons/bell-icon";
import ChevronDownIcon from "@/components/ui/icons/chevron-down-icon";

const FAKE_NOTIFICATIONS_LENGTH = 1;

const UserSection = () => {
  const { isLoggedIn, user, setLoginProcessStarted, logout } = useAuth();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
  };

  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        gap: "24px",
        alignItems: "center",
      }}
    >
      <LangSwitcher />

      {isLoggedIn ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <IconButton sx={{ width: 36, height: 36 }}>
            <Badge
              variant="dot"
              invisible={FAKE_NOTIFICATIONS_LENGTH < 1}
              color="error"
            >
              <BellIcon />
            </Badge>
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleOpenUserMenu}
              disableTouchRipple
              sx={{
                p: 0,
                alignItems: "center",
                gap: "8px",

                "&:hover": { background: "transparent" },

                "& svg": {
                  transition: "all 0.3s ease",
                  transform: anchorElUser ? "rotate(180deg)" : "rotate(0deg)",
                },
              }}
            >
              <Avatar
                src={user?.avatar}
                alt="Аватар пользователя"
                sx={{ width: 36, height: 36 }}
              />

              <ChevronDownIcon />
            </Button>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Выйти</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      ) : (
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            padding: "10px",
            backgroundColor: theme.palette.background.default,
            borderRadius: "10px",
          }}
          onClick={() => setLoginProcessStarted(true)}
          aria-label="Войти"
        >
          <UserIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default UserSection;
