import React, { useState } from 'react'

const CircleColor = ({ index, color, colorSelected, colors, setColors }) => {

  const circleColorClassName = `rounded-full border-3 border-white w-20 h-20 bg-[${color}] `;

  const handleClick = () => {
    const newColors = [...colors];
    newColors[index] = colorSelected;
    setColors(newColors);
  }

  return (
    <div className={circleColorClassName} onClick={handleClick}>
      {color === '' && <img src="icons/default.svg" alt="No color" />}
    </div>
  );
};

export default CircleColor