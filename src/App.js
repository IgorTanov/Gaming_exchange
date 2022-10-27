import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Container from "./components/container/conatainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </div>
  );
}

export default App;
