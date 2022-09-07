import React, { useState } from 'react';
import './TeamSection.css';

function TeamSection() {
  return (
    <>
      <div class="team-section">
        <h1>Our Team</h1>
        <span class="border"></span>
        <div class="ps">
          <a href="#p1">
            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/person4.png" alt="" />
          </a>
          <a href="#p2">
            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/person4.png" alt="" />
          </a>
          <a href="#p3">
            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/person4.png" alt="" />
          </a>
        </div>

        <div class="section" id="p1">
          <span class="name">Raymond Lee</span>
          <span class="border"></span>
          <p>
            Fundador de RTI Latina. Punto de soporte y cimiento de nuestros principios e ideología. Testimonio viviente
            de una iniciativa que comenzó desde cero con la capacidad de saber escuchar las necesidades tecnológicas del
            entorno y la voluntad de responder de la mejor manera posible a cada reto, hoy en día con un equipo bien
            entrenado bajo una sencilla pero muy efectiva organización. “En RTI Latina buscamos enfocarnos en el valor
            humano de la tecnología, las diversas formas en las que el desarrollo informático, cuando es impulsado como
            un sub-producto de la creatividad, tiene el potencial de mejorar la calidad de vida, ahorrando importantes
            cantidades de tiempo y esfuerzos que pueden reorientarse al enriquecimiento de una mejor y más amplia
            experiencia tanto dentro como más allá del trabajo diaro. La tecnología es una forma de arte.”{' '}
          </p>
        </div>
        <div class="section" id="p2">
          <span class="name">Raymand Lee</span>
          <span class="border"></span>
          <p>LOREKJREJKREJKR kjdkjsadfkjdasfj kf kjasdfk ljaskfjd asjkfsa kjdfj akdfkj asdfkj akjf afkj</p>
        </div>
        <div class="section" id="p3">
          <span class="name">Raymofd Lee</span>
          <span class="border"></span>
          <p>LOREKJREJKREJKR kjdkjsadfkjdasfj kf kjasdfk ljaskfjd asjkfsa kjdfj akdfkj asdfkj akjf afkj</p>
        </div>
      </div>
    </>
  );
}
export default TeamSection;
