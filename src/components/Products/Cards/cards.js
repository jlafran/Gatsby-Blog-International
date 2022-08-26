import React, { useState } from 'react';
import './card.scss';

const CardBlack = (props) => {
  const { JSONDATA } = props;
  const renderCard = (card, index) => {
    return (
      <div class="card-container">
        <div class="card card--dark">
          <a href={card.url}>
            <div class="card--display ">
              <h1 class="bold card-title-single">{card.title}</h1>
              <h2 className="regular card-text-products">{card.text}</h2>
            </div>
            <div class="card--hover">
              <h2>{card.titleInfo}</h2>
              <p>{card.info}</p>
              <p class="link">Click para más Info.</p>
            </div>
          </a>
          <div class="card--border"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="">
        <div className="container-product">{JSONDATA.map(renderCard)}</div>
      </div>
    </>
  );
};
export default CardBlack;
