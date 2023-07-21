import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import "./Cube.css";

const Cube = () => {
  const [sayi1, setSayi1] = useState(1);
  const [sayi2, setSayi2] = useState(1);
  const [sallaniyor, setSallaniyor] = useState(false);

  const cubeIconlar = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

  const handleClick = () => {
    if (!sallaniyor) {
      setSallaniyor(true);
      setTimeout(() => {
        const randomSayi1 = Math.floor(Math.random() * 6) + 1;
        console.log(randomSayi1)
        const randomSayi2 = Math.floor(Math.random() * 6) + 1;
        console.log(randomSayi2)
        setSayi1(randomSayi1);
        setSayi2(randomSayi2);
        setSallaniyor(false);
      }, 1000);
    }
  };

  return (
    <div className="cube-container">
        <div className={`cube-img ${sallaniyor ? 'sallaniyor2' : ''}`}></div>
        <div className='icon'>
          <FontAwesomeIcon icon={cubeIconlar[sayi1 - 1]} size="6x" className={sallaniyor ? 'cube-icon sallaniyor' : 'cube-icon'} />
          <FontAwesomeIcon icon={cubeIconlar[sayi2 - 1]} size="6x" className={sallaniyor ? 'cube-icon sallaniyor' : 'cube-icon'} />
        </div>
        <button onClick={handleClick} disabled={sallaniyor} className={`${sallaniyor ? 'spin' : ''}`}>.</button>
        {sallaniyor && <div className="btn-title">Wait...</div>}
    </div>
  );
};

export default Cube;


