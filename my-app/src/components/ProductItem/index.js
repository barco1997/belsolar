import React from 'react';
//  import PropTypes from 'prop-types';
import { media } from '../../utils/media';
//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LinkButton from './button';
import ph1 from './ph1.png';
const ProductItemWrapper = styled.div`
  width: 240px;
  height: 220px;
  ${media.desktop`
  width: 26.6vw;
  height: 26.6vw;
  `};
  ${media.phone`
  width: 40vw;
  height: 40vw;
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
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Montserrat';
  font-weight: normal;
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
            }}
          >
            <LinkButton background="#2ecc71" to={this.props.to}>
              {this.props.title}
            </LinkButton>
          </div>
        </Overlay>
      </ProductItemWrapper>
    );
  }
}

export default ProductItem;
