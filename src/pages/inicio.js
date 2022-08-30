import React from 'react';
import Productos from '../components/Products/ProductsFilter';
import OurTeam from '../components/OurTeam/OurTeam';
import JoinUs from '../components/JoinUs/JoinUs';
import ProductCard from '../components/ProductCards/ProductCard';
import Inicial from '../components/Inicial/Inicial';
import Footer from '../components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = ({ author, className, langKey }) => {
  return (
    <>
      <Inicial></Inicial>
      <br></br>
      <br />
      <br></br>
      <br />
      <br></br>
      <br />
      <br></br>
      <br />
      <ProductCard></ProductCard>
      <br></br>
      <br />
      <JoinUs></JoinUs>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </>
  );
};

export default Inicio;
