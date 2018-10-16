import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
import logo from './logo.png';
const CatCardWrapper = styled.div`
  flex-direction: row;
  display: flex;

  flex-wrap: wrap;
  padding-left: 12vw;
  padding-right: 12vw;

  margin: 25px -20px;
  & > div {
    margin: 20px 20px;
  }
  ${media.desktop`
  justify-content: center;
  padding-left: 7vw;
  padding-right: 7vw;
  
  `};
`;

const TextCaption = styled.div`
  font-size: 30px;
  width: 100%;
  color: black;
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  ${media.desktop`
  font-size: 32px;
  text-align: center;
  `};
`;

const ProductItemWrapper = styled.img`
  height: 100px;
`;
export class CollaborationFrame extends React.Component {
  //  constructor(props, context) {
  //  super(props, context);
  //    this.state = {
  //    id: this.getId(),
  //  };
  //  this.getId = this.getId.bind(this);
  //}

  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  render() {
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '400px',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <CatCardWrapper>
          {this.props.header && <TextCaption>Наши партнеры:</TextCaption>}
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
          <ProductItemWrapper src={logo} alt="pokerface" />
        </CatCardWrapper>
      </div>
    );
  }
}

export default CollaborationFrame;
