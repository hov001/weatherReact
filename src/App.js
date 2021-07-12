import './App.css';
// Get Items
import GetWeatherBlock from "./helper/GetWeatherBlock";

function App() {
  return (
    <div className="App">
      <div className="container">
          {GetWeatherBlock}
      </div>
    </div>
  );
}

export default App;
