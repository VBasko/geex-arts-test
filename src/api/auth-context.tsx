import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import userAvatar from "@/assets/user-avatar.png";

interface IUser {
  displayName: string;
  avatar: string;
}

interface IAuthContext {
  isLoggedIn: boolean;
  isLoginProcessStarted: boolean;
  user: IUser | null;
  setLoginProcessStarted: (isStarted: boolean) => void;
  login: () => void;
  logout: () => void;
}

const EMPTY_CONTEXT: IAuthContext = {
  isLoggedIn: false,
  isLoginProcessStarted: false,
  user: null,
  setLoginProcessStarted: () => {},
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(EMPTY_CONTEXT);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginProcessStarted, setIsLoginProcessStarted] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useLayoutEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUser && storedIsLoggedIn) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
    }
  }, []);

  useLayoutEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    }
  }, [isLoggedIn, user]);

  const setLoginProcessStarted = (isStarted: boolean) => {
    setIsLoginProcessStarted(isStarted);
  };

  const login = () => {
    setIsLoggedIn(true);
    setUser({
      displayName: "Иван Иванов",
      avatar: userAvatar,
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    setIsLoginProcessStarted(false);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoginProcessStarted,
        setLoginProcessStarted,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
