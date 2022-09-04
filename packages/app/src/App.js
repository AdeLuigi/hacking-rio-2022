import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from "./routes/route";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
