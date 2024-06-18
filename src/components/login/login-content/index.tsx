import Button from "@mui/material/Button";

import { useAuth } from "@/api/auth-context";

const LoginContent = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
  };

  return (
    <>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default LoginContent;
