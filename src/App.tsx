import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Private } from "./Private";
import Home from "./components/Home";
import { Login } from "./components/Login";
import Top from "./components/Top";
import { useAuth } from "./hooks/useAuth";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<Private />}>
            <Route path="/private/top" element={<Top />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
