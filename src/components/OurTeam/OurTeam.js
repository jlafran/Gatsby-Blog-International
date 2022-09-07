import React, { useState } from 'react';
import './OurTeam.css';

function OurTeam() {
  return (
    <>
      <section class="profiles">
        <a className="profileHover" href="#">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />

          <div className="divhover">
            <h3 className="textoOT">Ramesh Bhatnagar</h3>
            <span className="textospan">QA</span>
          </div>
        </a>

        <a className="profileHover" href="#">
          <img
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />

          <div className="divhover">
            <h3 className="textoOT">Ramesh Bhatnagar</h3>
            <span className="textospan">QA</span>
          </div>
        </a>

        <a className="profileHover" href="#">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />

          <div className="divhover">
            <h3 className="textoOT">Ramesh Bhatnagar</h3>
            <span className="textospan">QA</span>
          </div>
        </a>

        <a className="profileHover" href="#">
          <img
            src="https://images.pexels.com/photos/8638757/pexels-photo-8638757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />

          <div className="divhover">
            <h3 className="textoOT">Ramesh Bhatnagar</h3>
            <span className="textospan">QA</span>
          </div>
        </a>

        <a className="profileHover" href="#">
          <img
            src="https://images.pexels.com/photos/6256327/pexels-photo-6256327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="divhover">
            <h3 className="textoOT">Ramesh Bhatnagar</h3>
            <span className="textospan">QA</span>
          </div>
        </a>
        <div className="profilee">
          <a className="profileHover" href="#">
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="divhover">
              <h3 className="textoOT">Ramesh Bhatnagar</h3>
              <span className="textospan">QA</span>
            </div>{' '}
          </a>

          <div className="hoverDescription">
            <h1 className="textoDescription">
              Fundador de RTI Latina. Punto de soporte y cimiento de nuestros principios e ideología. Testimonio
              viviente de una iniciativa que comenzó desde cero con la capacidad de saber escuchar las necesidades
              tecnológicas del entorno y la voluntad de responder de la mejor manera posible a cada reto, hoy en día con
              un equipo bien entrenado bajo una sencilla pero muy efectiva organización. “En RTI Latina buscamos
              enfocarnos en el valor humano de la tecnología, las diversas formas en las que el desarrollo informático,
              cuando es impulsado como un sub-producto de la creatividad, tiene el potencial de mejorar la calidad de
              vida, ahorrando importantes cantidades de tiempo y esfuerzos que pueden reorientarse al enriquecimiento de
              una mejor y más amplia experiencia tanto dentro como más allá del trabajo diaro. La tecnología es una
              forma de arte.”
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
export default OurTeam;
