/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
//  import Drawer from 'react-motion-drawer';
import { media } from '../../utils/media';
//  import MenuWrapper from '../MenuWrapper/index';
//  import MenuItem from '../MenuItem/index';
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';
import image4 from './image4.svg';
import image5 from './image5.svg';
import image6 from './image6.svg';
import { Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eee7e1;

  font-family: 'Century Gothic';
  border-style: ${props => (props.color ? 'none' : 'solid')};
  border-width: 0px 0px 1px 0px;
  border-color: #eee7e1;
  ${media.desktop`height: 60px;`};
`;

const Menu = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  font-size: 13px;
  margin: 0px -15px;
  & > * {
    margin: 0px 15px;
  }
`;

const NavMenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 4px;
  padding-top: 2px;
  align-items: center;
  ${media.desktop`display: none;`};
  &:hover > div {
    font-size: 15px;
  }
  &:hover > img {
    width: 50px;
  }
  &:hover {
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

const MenuImg = styled.img`
  margin-top: 3px;
  width: 46px;
`;

const MenuText = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;
/* eslint-disable react/prefer-stateless-function */
export class ProductsBar extends React.Component {
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
      <NavBarWrapper color={this.props.color}>
        <Menu>
          <NavMenuItem to="/main">
            <MenuImg src={image1} alt="image" />
            <MenuText>Сантехника</MenuText>
          </NavMenuItem>
          <NavMenuItem to="/main">
            <MenuImg src={image2} alt="image" />
            <MenuText>Плитка</MenuText>
          </NavMenuItem>
          <NavMenuItem to="/main">
            <MenuImg src={image3} alt="image" />
            <MenuText>Паркет</MenuText>
          </NavMenuItem>
          <NavMenuItem to="/main">
            <MenuImg src={image4} alt="image" />
            <MenuText>Мебель</MenuText>
          </NavMenuItem>
          <NavMenuItem to="/main">
            <MenuImg src={image5} alt="image" />
            <MenuText>Кухни</MenuText>
          </NavMenuItem>
          <NavMenuItem to="/main">
            <MenuImg src={image6} alt="image" />
            <MenuText>Свет</MenuText>
          </NavMenuItem>
        </Menu>
      </NavBarWrapper>
    );
  }
}

export default ProductsBar;
