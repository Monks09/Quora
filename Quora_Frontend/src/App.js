import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((store) => {
    return store.loggedInUser;
  });

  return (
    <div className="App">
      {user ? <Navbar /> : null}
      <AllRoutes />
    </div>
  );
}

export default App;
