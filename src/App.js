import './App.css';
import Allroutes from './Component/Allroutes';
import Signin from './Pages/LoginPage/Signin/Signin';
function App() {
  return (
    <div className="App">
      <Allroutes />
    </div>
  )
}

export default App;
// json-server --watch db.json --port 2000
