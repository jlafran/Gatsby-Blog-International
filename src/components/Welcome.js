import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaDribbble, FaGithub } from 'react-icons/fa';
import { media } from '../constants/responsive';
import Avatar from './img/welcome_avatar.png';
import DATAES from '../data/es.json';
import DATAEN from '../data/en.json';
import DATAPT from '../data/pt.json';

import Productos from '../components/Products/ProductsFilter';
import OurTeam from '../components/OurTeam/OurTeam';
import JoinUs from '../components/JoinUs/JoinUs';
import ProductCard from '../components/ProductCards/ProductCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const stringifyES = JSON.stringify(DATAES);
const bienvenidaes = JSON.parse(stringifyES);
const stringifyEN = JSON.stringify(DATAEN);
const bienvenidaen = JSON.parse(stringifyEN);
const stringifyPT = JSON.stringify(DATAPT);
const bienvenidapt = JSON.parse(stringifyPT);

const Welcome = ({ author, className, langKey }) => {
  const getIntro = () => ({
    en: bienvenidaen.welcome,
    pt: bienvenidapt.welcome,
    es: bienvenidaes.welcome,
  });
  const getBio = () => ({
    en: bienvenidaen.introduccion,
    pt: bienvenidapt.introduccion,
    es: bienvenidaes.introduccion,
  });
  {
    console.log(langKey, 'langkey');
  }

  return (
    <MainWrapper className={className}>
      <Wrapper>
        <LeftGapCell />
        <BioWrapper middle>
          <BioContainer>
            <Name>
              <span dangerouslySetInnerHTML={{ __html: getIntro()[langKey] }} />
            </Name>
            <Bio dangerouslySetInnerHTML={{ __html: getBio()[langKey] }} />
            <SocialLinks>
              <li>
                <A href="http://twitter.hugo.im" target="_blank" rel="noreferrer noopener">
                  <FaTwitter />
                </A>
              </li>
              <li>
                <A href="http://linkedin.hugo.im" target="_blank" rel="noreferrer noopener">
                  <FaLinkedin />
                </A>
              </li>
              <li>
                <A href="http://instagram.hugo.im" target="_blank" rel="noreferrer noopener">
                  <FaInstagram />
                </A>
              </li>
              <li>
                <A href="http://facebook.hugo.im" target="_blank" rel="noreferrer noopener">
                  <FaFacebook />
                </A>
              </li>
              <li>
                <A href="http://dribbble.hugo.im" target="_blank" rel="noreferrer noopener">
                  <FaDribbble />
                </A>
              </li>
              <li>
                <A href="http://github.hugo.im" target="_blank" rel="noreferrer noopener">
                  <FaGithub />
                </A>
              </li>
            </SocialLinks>
          </BioContainer>
        </BioWrapper>
        <PictureContainer center>
          <ProfilePicture src={Avatar} alt="RTI" width={410} height={341} />
        </PictureContainer>
        <RightGapCell />
      </Wrapper>
      <Productos></Productos>
      <br></br>
      <br />
      <br></br>
      <br />
      <br></br>
      <br />
      <br></br>
      <br />
      <ProductCard></ProductCard>

      <OurTeam></OurTeam>
      <JoinUs></JoinUs>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: ${(props) => props.theme.welcome.backgroundColor};
  padding-top: 2rem;
  ${media.md`
    padding-top: 0;
  `}
`;

const Wrapper = styled(Grid)`
  margin: ${(props) => props.theme.welcome.margin};
  font-family: ${(props) => props.theme.blog.author.fontFamily};
  font-size: ${(props) => props.theme.blog.author.fontSize};
  line-height: ${(props) => props.theme.blog.author.lineHeight};
  height: auto;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: auto 4.2rem 4.2rem auto;
  grid-gap: 0px;
  ${media.md`
    height: 468px;
    grid-auto-flow: column;
    grid-template-columns: auto 50rem 21.25rem auto;
  `}
`;

const BioWrapper = styled(Cell)`
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  text-align: center;
  ${media.md`
    text-align: left;
    background: url('/img/welcome_bg_curve.png') top right no-repeat;
    background-size: 244px 468px;
    font-size: 2.625rem;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  `}
`;

const BioContainer = styled.div`
  padding: 0px;
  ${media.md`
    padding: 0 45px;
  `}
`;

const PictureContainer = styled(Cell)`
  position: relative;
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  background: url('/img/welcome_bg.png') top left;
  border-radius: 50%;
  ${media.md`
    max-width: none;
    border-radius: 0%;
    background-size: 1px 468px;
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  `}
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  ${media.md`
    border-radius: 0%;
    height: auto;
    width: 410px;
    position: absolute;
    bottom: 0;
    left: -80px;
  `}
`;

const LeftGapCell = styled(Cell)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`;

const RightGapCell = styled(Cell)`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;
  ${media.md`
    background: url('/img/welcome_bg.png') top left;
    background-size: 1px 468px;
  `}
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.SansSerif};
  font-weight: 500;
  margin: 1.2rem 0 1.6rem;
  ${media.md`
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    font-size: 2.625rem;
  `}
  .name {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

const Bio = styled.div`
  line-height: ${({ theme }) => theme.scale(3.2)};
  display: block;
  font-size: 0.9rem;
  br {
    display: none;
  }
  padding: 0 35px;
  ${media.md`
    br { display: block; }
    font-size: 0.9375rem;
    padding: 0 120px 0 0;
  `}
`;

const SocialLinks = styled.ul`
  margin-top: 26px;
  margin-bottom: 30px;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 5px;
  }
  ${media.md`
    margin-bottom: 0px;
  `}
`;

const A = styled.a`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  font-size: 1.5rem;
  display: inline-block;
  padding: ${(props) => props.theme.socialLinks.a.padding};
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.socialLinks.a.hover.color};
    transition: 0.3s;
  }
`;

Welcome.propTypes = {
  author: PropTypes.object.isRequired,
  className: PropTypes.string,
  langKey: PropTypes.string,
};

export default Welcome;
