import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const ProductItemWrapper = styled.div`
  width: 320px;
  height: 220px;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.background}); /* The image used */
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  font-family: 'Century Gothic';
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 243, 0.65);
  display: flex;
  flex-direction: column;
  font-family: 'Century Gothic';
  opacity: 0;
  &:hover {
    opacity: 1;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  font-size: 25px;
  margin-left: 30px;
  margin-top: 20px;
`;

const Description = styled.div`
  font-size: 12px;
  margin-left: 30px;
  margin-top: 7px;
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
      <ProductItemWrapper background={this.props.background}>
        <Overlay>
          <Header>Новость</Header>
          <Description>
            Иррациональное в творчестве относительно. Эзотерическое имитирует
            символический метафоризм, таким образом, второй комплекс движущих
            сил получил разработку в трудах А.Берталанфи и Ш.Бюлера.
          </Description>
        </Overlay>
      </ProductItemWrapper>
    );
  }
}

export default ProductItem;
