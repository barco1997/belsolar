import React from 'react';
//  import PropTypes from 'prop-types';
import { media } from '../../utils/media';
//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';

//  import ph1 from './ph1.png';
const ProductItemWrapper = styled.div`
  width: 320px;
  height: 220px;
  ${media.desktop`
  width: 41.5vw;
  height: 30vw;
  `};
  ${media.phone`
  width: 320px;
  height: 220px;
  `};
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.background}); /* The image used */
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  font-family: 'Montserrat';
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(48, 48, 48, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserrat';
  font-weight: normal;
  font-size: 20px;
  color: white;
  opacity: 1;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class ServiceItem extends React.Component {
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
      <ProductItemWrapper background={this.props.background}>
        <Overlay>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
            }}
          >
            {this.props.title}
          </div>
        </Overlay>
      </ProductItemWrapper>
    );
  }
}

export default ServiceItem;
