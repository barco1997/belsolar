import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LinkButton from './button';
import ph1 from './ph1.png';
const ProductItemWrapper = styled.div`
  width: 240px;
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

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Century Gothic';
  font-size: 12px;
`;

/* eslint-disable react/prefer-stateless-function */
export class ProductItem extends React.Component {
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
      <ProductItemWrapper
        background={this.props.background ? this.props.background : ph1}
      >
        <Overlay>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
            }}
          >
            <LinkButton background="#2346ff" to={this.props.to}>
              {this.props.title}
            </LinkButton>
          </div>
        </Overlay>
      </ProductItemWrapper>
    );
  }
}

export default ProductItem;