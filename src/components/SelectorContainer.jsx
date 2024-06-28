import React, { useEffect, useState } from 'react';
import CircleColor from './CircleColor';

const SelectorContainer = ({ colorSelected, colors, setColors, activeIndex, setActiveIndex }) => {

  return (
    <div className="flex justify-center items-center gap-x-6 py-6">
      {Array.from(colors).map((color, index) => (
        <CircleColor
          key={index}
          index={index}
          color={color}
          colorSelected={colorSelected}
          colors={colors}
          setColors={setColors}
          setActiveIndex={setActiveIndex}
          isSelected={activeIndex === index}
        />
      ))}
    </div>
  );
};

export default SelectorContainer;

