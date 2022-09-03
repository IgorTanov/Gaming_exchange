import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Container from './components/container/conatainer';


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
