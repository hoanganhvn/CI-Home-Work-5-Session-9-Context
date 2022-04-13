
import HomeWork from './Components/HomeWork';
import Imagin from './Components/Imagin';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Selector from './Components/Selector';
import AddContext from './Components/AddContext';
import { useState } from "react";

function App() {
  const [login, setLogin] = useState({
    welcomeNavbar: "ĐĂNG NHẬP",
    welcomeHomeWork: "",
    popupLogin: "block",
    formLogin: "ĐĂNG NHẬP",
    placeholderLogin: "TÊN ĐĂNG NHẬP...",
    buttonLogin: "ĐĂNG NHẬP"
  });

  return (
    <AddContext.Provider value={{ login: login, setLogin: setLogin }}>
      <div>
        <Navbar />
        <Imagin />
        <HomeWork />
        <Login popupLogin={login.popupLogin} />
        <Selector />
      </div>
    </AddContext.Provider>
  );
}

export default App;