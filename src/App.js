import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Allroutes from "./Component/Allroutes";
import loginContext from "./Components/Context/Context";
function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User",
  });

  const fnLoggedIn = (data) => {
    setState(data);
  };

  const fnLoggedOut = () => {
    setState({
      isLoggedIn: false,
      user: "Guest User",
    });
  };

  return (
    <div className="App">
      <loginContext.Provider value={{ state, fnLoggedIn, fnLoggedOut }}>
        <Navbar />
        <Allroutes />
      </loginContext.Provider>
    </div>
  );
}

export default App;
