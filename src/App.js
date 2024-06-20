import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SelectorContainer from './components/SelectorContainer';
import Picker from './components/Picker';

function App() {

  const [colorSelected, setColorSelected] = useState('')
  const [colors, setColors] = useState(Array(5).fill(''))

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 bg-[#2C2C2C] h-screen w-screen p-4">
      <Header />
      <SelectorContainer colorSelected={colorSelected} colors={colors} setColors={setColors}/>
      <Picker colorSelected={colorSelected} setColorSelected={setColorSelected} />
    </div>
  );
}

export default App;

