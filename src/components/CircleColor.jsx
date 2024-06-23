import React from 'react'

const CircleColor = ({ index, color, colorSelected, colors, setColors, setActiveIndex, isSelected }) => {
  
  const circleSize = isSelected ? 'w-24 h-24' : 'w-20 h-20';
  const circleBackground = color !== '' ? `border-4 border-white bg-[${color}]` : '';
  const circleClassName = `rounded-full ${circleSize} ${circleBackground}`;

  const handleClick = () => {
    setActiveIndex(index);
    const newColors = [...colors];

    if (colorSelected === '') {
      newColors[index] = '#000000';
      setColors(newColors);
    }
  }

  return (
    <div className={circleClassName} onClick={handleClick}>
      {color === '' && <img src="icons/default.svg" alt="No color" />}
    </div>
  );
};

export default CircleColor
