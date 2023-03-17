import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  let token = localStorage.getItem("token");
  
  return (
    <div className="App">
      {token ? <Navbar /> : null}
      <AllRoutes />
    </div>
  );
}

export default App;
