import React, { useState } from 'react';
import './Contador.css';
import CountUp, { useCountUp } from 'react-countup';

function Contador() {
  return (
    <>
      <div class="containerContador">
        <div class='contentContador'>
        <div class="contador1">
          <CountUp end={8} className='contador'/>
          <p class='texto'>YEARS</p>
          <p class='texto'> IN BUSINESS</p></div>
          <div class="contador1">
          <CountUp end={150} className='contador' />
          <p class='texto'>HAPPY</p>
          <p class='texto'>CLIENTS</p></div>
          <div class="contador1">
          <CountUp end={28} className='contador' />
          <div class='divTexto'>
          <p class='texto'>FULL-TIME</p>
          <p class='texto'>SPECIALISTS</p></div></div>
          </div>
      </div>

    </>
  );
}
export default Contador;
