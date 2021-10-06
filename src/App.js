import "./App.css";
import Control from "./components/Control";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Control />
      </header>
    </div>
  );
}

export default App;
