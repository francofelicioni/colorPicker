import './App.css';
import Header from './components/header/header';
import Selector from './components/selector/selector';
import { useEffect, useState } from 'react';
// import SavedPallete from './components/saved/saved';

function App() {

  const [savedscheme, setSavedscheme] = useState([])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('savedscheme'))) {
      setSavedscheme(JSON.parse(localStorage.getItem('savedscheme')));
      console.log(JSON.parse(localStorage.getItem('savedscheme')))
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="selector" >
        <Selector 
          savedscheme={savedscheme}
          setSavedscheme={setSavedscheme}
        />
      </div>
    </div>
  );
}

export default App;
