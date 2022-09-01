import Container from "./components/container"
import './App.css';

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
