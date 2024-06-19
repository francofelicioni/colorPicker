import './App.css';
import SelectorContainer from './components/SelectorContainer';
import Header from './components/header';
import Picker from './components/Picker';
import { useState } from 'react';

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

