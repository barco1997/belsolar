import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';

import ProductItem from '../ProductItem/index';
import LinkButton from '../LinkButton/index';
const Description = styled.div`
  max-width: 690px;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const LowRow = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  margin-top: 35px;
  ${media.desktop`
  justify-content: center;
  `};
  & > div {
    margin: 15px 15px;
  }
  & > div:nth-last-child(1) {
    margin-top: 35px;
  }
`;

const MoreCapture = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 20px;
  & > :nth-child(2) {
    margin-left: 15px;
  }
  ${media.desktop`
  justify-content: center;
  & > :nth-child(2) {
    margin-right: 15px;
    margin-top: 10px;
  }
  `};
`;
/* const LowRowItem = styled.div`
  display: flex;
`; */

const CatalogueCardWrapper = styled.div`
  flex-direction: column;
  min-height: 790px;
  display: flex;
  ${media.desktop`
  align-items: center;
  padding-left: 7vw;
  padding-right: 7vw;
  font-size: 15px;
  `};
  background: #fafafa;
  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: normal;
  padding-left: 12vw;
  padding-right: 12vw;
`;

const Header = styled.div`
  ${media.desktop`
  font-size: 32px;
  
  `};

  font-size: 40px;
  font-weight: 700;
  margin-top: 150px;
`;

export class ProductsFrame extends React.Component {
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
      <CatalogueCardWrapper>
        <Header>Наши продукты:</Header>

        <Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Description>

        <LowRow>
          <ProductItem title="Системы отопления" description="wow" to="/main" />
          <ProductItem title="Системы отопления" description="wow" to="/main" />
          <ProductItem title="Системы отопления" description="wow" to="/main" />
          <ProductItem title="Системы отопления" description="wow" to="/main" />
          <MoreCapture>
            <div>Lorem ipsum dolor sit amet, conse ctetur ></div>
            <LinkButton background="white" color="#2346ff" to="/main">
              Смотреть все
            </LinkButton>
          </MoreCapture>
        </LowRow>
      </CatalogueCardWrapper>
    );
  }
}

export default ProductsFrame;
