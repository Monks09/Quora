import "./App.css";
import Allroutes from "./Component/Allroutes";
import Navbar from "./Component/Navbar/Navbar";
function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      {token ? <Navbar /> : null}
      <Allroutes />
    </div>
  );
}

export default App;
