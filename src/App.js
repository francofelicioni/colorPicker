import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SelectorContainer from './components/SelectorContainer';
import Picker from './components/Picker';
import NameInput from './components/NameInput';
import SavedSchemasContainer from './components/SavedSchemasContainer';

function App() {

  const [colorSelected, setColorSelected] = useState('')
  const [colors, setColors] = useState(Array(5).fill(''))
  const [activeIndex, setActiveIndex] = useState(null);
  const [savedSchemas, setSavedSchemas] = useState([])

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 bg-[#2C2C2C] h-screen w-screen p-4">
      <Header />
      <SelectorContainer colorSelected={colorSelected} colors={colors} setColors={setColors} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      <div className='flex align-center justify-between gap-x-8'>
        <Picker colorSelected={colorSelected} setColorSelected={setColorSelected} colors={colors} setColors={setColors} index={activeIndex}/>
        <NameInput colors={colors} setColors={setColors} setActiveIndex={setActiveIndex} savedSchemas={savedSchemas} setSavedSchemas={setSavedSchemas}/>
      </div>
      <SavedSchemasContainer savedSchemas={savedSchemas} setSavedSchemas={setSavedSchemas} setColors={setColors}/>
    </div>
  );
}

export default App;

