import './App.css';
import Header from './Components/header/Header.jsx';
import { Main } from './Components/main/Main.jsx';
import {useState} from 'react';

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
