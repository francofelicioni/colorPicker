import React from 'react';
import CircleColor from './CircleColor';

const SelectorContainer = ({ colorSelected, colors, setColors }) => {

  return (
    <div className="flex justify-center items-center gap-x-8 py-4">
      {Array.from(colors).map((color, index) => (
        <CircleColor
          key={index}
          index={index}
          color={color}
          colorSelected={colorSelected}
          colors={colors}
          setColors={setColors}
        />
      ))}
    </div>
  );
};

export default SelectorContainer;

