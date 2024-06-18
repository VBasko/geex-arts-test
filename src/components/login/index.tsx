import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import LoginContent from "./login-content";
import CustomModal from "@/components/ui/custom-modal";
import CustomSwipableDrawer from "../ui/custom-swipable-drawer";
import { useAuth } from "@/api/auth-context";

const Login = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { isLoginProcessStarted, setLoginProcessStarted } = useAuth();

  return isMobile ? (
    <CustomSwipableDrawer
      open={isLoginProcessStarted}
      onOpen={() => setLoginProcessStarted(true)}
      onClose={() => setLoginProcessStarted(false)}
    >
      <LoginContent />
    </CustomSwipableDrawer>
  ) : (
    <CustomModal
      open={isLoginProcessStarted}
      onClose={() => setLoginProcessStarted(false)}
    >
      <>
        <LoginContent />
      </>
    </CustomModal>
  );
};

export default Login;
