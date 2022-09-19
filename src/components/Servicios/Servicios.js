import React, { useState } from 'react';
import './Servicios.scss';

function Servicios({ data }) {
  return (
    <>
      <div class="image-card-container">
        <div class="image-card image-card--horizontal">
          <img
            class="image-card__image"
            alt=""
            src="https://statics.globant.com/production/public/2019-04/GettyImages-538096543_medium%20Copy%203.png"
          />
          <div class="image-card__content image-card__content--soft-background">
            <h2 class="image-card__title">{data.titulo}</h2>
            <p class="image-card__description">
              Equipos certificados, de amplia compatibilidad y sencilla configuración, para emitir comprobantes,
              facturas y tickets fiscales, y almacenar el registro. Una opción necesaria y oportuna en el trayecto de
              construir un sistema de facturación propio con un mínimo consumo de datos, acoplándola a computadores que
              cuenten con el programa y el set de configuraciones necesarias para su operación.
            </p>
            <a class="linkCARD" href="#">
              MAS INFORMACION
            </a>
          </div>
        </div>

        <div class="image-card image-card--horizontal">
          <img
            class="image-card__image"
            alt=""
            src="https://statics.globant.com/production/public/2019-04/GettyImages-538096543_medium%20Copy%204.png"
          />
          <div class="image-card__content image-card__content--soft-background">
            <h2 class="image-card__title">PLAYGROUND</h2>
            <p class="image-card__description">
              Playground es un espacio inspirador en el que se muestra el ADN de Globant y todos los viajes digitales
              exitosos en tiempo real. Proporciona una experiencia profunda para que las empresas comiencen y aceleren
              la evolución de su ciclo de vida digital.
            </p>
            <a class="linkCARD" href="#">
              VISITANOS
            </a>
          </div>
        </div>

        <div class="image-card image-card--horizontal">
          <img
            class="image-card__image"
            alt=""
            src="https://statics.globant.com/production/public/2019-04/Converge.png"
          />
          <div class="image-card__content image-card__content--soft-background">
            <h2 class="image-card__title">CONVERGE</h2>
            <p class="image-card__description">
              Nuestros eventos exclusivos reúnen a algunas de las mentes más creativas de la industria para un día
              increíble de historias brillantes, ideas ingeniosas, experiencias de aprendizaje y el muestrario de
              asombrosa tecnología que permite a los asistentes repensar las nuevas formas en que pueden hacer negocios.
            </p>
            <a class="linkCARD" href="#">
              DESCUBRE CONVERGE
            </a>
          </div>
        </div>

        <div class="image-card image-card--horizontal">
          <img
            class="image-card__image"
            alt=""
            src="https://statics.globant.com/production/public/2019-03/events.png"
          />
          <div class="image-card__content image-card__content--soft-background">
            <h2 class="image-card__title">EVENTOS</h2>
            <p class="image-card__description">
              Organizamos eventos dirigidos a muchos públicos, desde pequeños encuentros para invitados o socios
              específicos hasta grandes eventos que dan la bienvenida a la comunidad en general. Cada uno de ellos busca
              aportar oradores apasionantes y posibilidades de interconexión.
            </p>
            <a class="linkCARD" href="#">
              PROXIMOS EVENTOS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicios;
