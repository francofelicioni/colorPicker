import React, { useState } from 'react'

const CircleColor = ({colorSelected}) => {

  const circleColorClass = colorSelected !== '' ? `rounded-full border border-3 border-white w-20 h-20 bg-[${colorSelected}]` : '';

  const handleClick = () => {
    console.log(colorSelected)
  }

  return (
    <div className={circleColorClass} onClick={handleClick}>
      {colorSelected === '' && <img src="icons/default.svg" alt="No color" />}
    </div>
  );
};

export default CircleColor