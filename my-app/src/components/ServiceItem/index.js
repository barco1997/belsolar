import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';

//  import ph1 from './ph1.png';
const ProductItemWrapper = styled.div`
  width: 320px;
  height: 220px;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.background}); /* The image used */
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  font-family: 'Century Gothic';
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(48, 48, 48, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserran';
  font-weight: normal;
  font-size: 20px;
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
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
