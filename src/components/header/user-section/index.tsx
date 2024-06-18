import { useAuth } from "@/api/auth-context";

import theme from "@/theme";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import LangSwitcher from "@/components/lang-switcher";
import UserIcon from "@/components/ui/icons/user-icon";

const UserSection = () => {
  const { isLoggedIn, user, setLoginProcessStarted } = useAuth();

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
        <IconButton edge="end" color="inherit">
          <Avatar src={user?.avatar} alt="User Avatar" />
        </IconButton>
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
          aria-label="Login"
        >
          <UserIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default UserSection;
