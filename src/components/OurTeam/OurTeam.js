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
              Fundador de RTI Latina. Punto de soporte y cimiento de nuestros principios e ideolog??a. Testimonio
              viviente de una iniciativa que comenz?? desde cero con la capacidad de saber escuchar las necesidades
              tecnol??gicas del entorno y la voluntad de responder de la mejor manera posible a cada reto, hoy en d??a con
              un equipo bien entrenado bajo una sencilla pero muy efectiva organizaci??n. ???En RTI Latina buscamos
              enfocarnos en el valor humano de la tecnolog??a, las diversas formas en las que el desarrollo inform??tico,
              cuando es impulsado como un sub-producto de la creatividad, tiene el potencial de mejorar la calidad de
              vida, ahorrando importantes cantidades de tiempo y esfuerzos que pueden reorientarse al enriquecimiento de
              una mejor y m??s amplia experiencia tanto dentro como m??s all?? del trabajo diaro. La tecnolog??a es una
              forma de arte.???
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
export default OurTeam;
