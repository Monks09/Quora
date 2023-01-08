import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App;
// json-server --watch db.json --port 2000
