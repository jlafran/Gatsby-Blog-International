import React, { useState } from 'react';
import './Contador.css';
import CountUp, { useCountUp } from 'react-countup';

function Contador() {
  return (
    <>
      <div class="containerContador">
        <div class="contentContador">
          <div class="contador1">
            <CountUp end={4000} className="contador" />
            <p class="texto">CLIENTES</p>
            <p class="texto"> SATISFECHOS</p>
          </div>
          <div class="contador1">
            <CountUp end={50000} className="contador" />
            <p class="texto">EQUIPOS FISCALES</p>
            <p class="texto">INSTALADOS</p>
          </div>
          <div class="contador1">
            <CountUp end={3} className="contador" />
            <div class="divTexto">
              <p class="texto">PROYECTOS</p>
              <p class="texto">EXTERIORES</p>
            </div>
          </div>
          <div class="contador1">
            <CountUp end={8000} className="contador" />
            <div class="divTexto">
              <p class="texto">SISTEMAS</p>
              <p class="texto">INSTALADOS</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Contador;
