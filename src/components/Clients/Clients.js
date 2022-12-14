import React, { useState } from 'react';
import './Clients.scss';
import CountUp, { useCountUp } from 'react-countup';

function Clients() {
  return (
    <>
      <div class="containerClients">
        <ul class="logogrid">
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
              class="logogrid__img"
              alt="Coca Cola"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              class="logogrid__img"
              alt="Google"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
              class="logogrid__img"
              alt="AirBnB"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
              class="logogrid__img"
              alt="Spotify"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/de/f/f9/Guinness_Logo.svg"
              class="logogrid__img"
              alt="Guinness"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg"
              class="logogrid__img"
              alt="Audi"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              class="logogrid__img"
              alt="Nike"
            />
          </li>
          <li class="logogrid__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              class="logogrid__img"
              alt="Netflix"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Clients;
