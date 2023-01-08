import "./App.css";
import Allroutes from "./component/Allroutes";
import Input from "./component/Input";

function App() {
  return (
    <div className="App">
      <Allroutes />
      {/* <Input /> */}
    </div>
  );
}

export default App;
// json-server --watch db.json --port 2000
