import React from 'react';
import Productos from '../components/Products/ProductsFilter';
import OurTeam from '../components/OurTeam/OurTeam';
import JoinUs from '../components/JoinUs/JoinUs';
import ProductCard from '../components/ProductCards/ProductCard';
import Inicial from '../components/Inicial/Inicial';
import Footer from '../components/Footer/Footer';
import Contador from '../components/Contador/Contador';
import Clients from '../components/Clients/Clients';
import Navbar from '../components/Navbar/Navbar';
import Freestyle from '../components/Freestyle/Freestyle';
import MeetTeam from '../components/MeetTeam/MeetTeam';
import TeamSection from '../components/TeamSection/TeamSection';
import NavbarNueva from '../components/NavbarNueva/NavbarNueva';
import '../components/NavbarNueva/NavbarNueva.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = ({ author, className, langKey }) => {
  return (
    <>
      <NavbarNueva></NavbarNueva>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProductCard></ProductCard>
      <br />
      <br />

      <br />
      <Contador />
      <br />
      <br />
      <br />
      <br />
      <Productos></Productos>
      <br />
      <br />

      <br />
      <br />
      <br />
      <Clients />
      <JoinUs></JoinUs>
      <Footer></Footer>
    </>
  );
};

export default Inicio;
