/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Drawer from 'react-motion-drawer';
import { media } from '../../utils/media';
import MenuWrapper from '../MenuWrapper/index';
import MenuItem from '../MenuItem/index';
//  import SendButton from 'components/SendButton';
//  import EyelandTagBlock from 'components/EyelandTagBlock';
//  import SocialTagBlock from 'components/SocialTagBlock';
//  import TagInputField from 'components/TagInputField';
//  import AttachIconButton from 'components/AttachIconButton';
//  import SocialInput from 'components/SocialInput';
//  import PlaceMap from 'containers/PlaceMap';
//  import {
//    withStyles,
//    MuiThemeProvider,
//    createMuiTheme,
//  } from '@material-ui/core/styles';
//  import TextField from '@material-ui/core/TextField';
//  import Grid from '@material-ui/core/Grid';
//  import ChipInput from 'material-ui-chip-input';
//  import { withFormik } from 'formik';
//  import * as Yup from 'yup';
//  import CouponCard from 'components/CouponCard';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';
import { Link } from 'react-router-dom';

const Burger = styled.div`
  margin: 0;
  padding: 0;

  display: block;

  width: 20px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: rgba(111, 111, 111, 1);
    border-radius: 7px;
    opacity: 1;
    right: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  span:nth-child(1) {
    top: 1px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 8px;
  }
  span:nth-child(4) {
    top: 15px;
  }

  ${props =>
    props.open &&
    `span:nth-child(1) {
      top: 8px;
      width: 0%;
      right: 50%;
    }
    span:nth-child(2),
    span:nth-child(3) {
      top: 8px;
    }
    span:nth-child(2) {
      transform: rotate(45deg);
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
    span:nth-child(4) {
      top: 8px;
      width: 0%;
      right: 50%;
    } `};
`;

const StyledDrawer = styled(Drawer)`
  background: white;
  display: none;
  ${media.desktop`display: block;`};
`;

const NavBarWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => (props.color ? props.color : 'white')};

  font-family: 'Century Gothic';
  border-style: ${props => (props.color ? 'none' : 'solid')};
  border-width: 0px 0px 1px 0px;
  border-color: #eee7e1;
`;

const Logo = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  margin: 0px -15px;
  & > * {
    margin: 0px 15px;
  }
`;

const NavMenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  ${media.desktop`display: none;`};
`;

/* eslint-disable react/prefer-stateless-function */
export class NavBar extends React.Component {
  //  constructor(props, context) {
  //  super(props, context);
  //    this.state = {
  //    id: this.getId(),
  //  };
  //  this.getId = this.getId.bind(this);
  //}
  state = {
    openLeft: false,
  };
  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  render() {
    const isOpen = this.state.openLeft;
    return (
      <NavBarWrapper color={this.props.color}>
        <Logo to="/main">ПОЗИТАНО</Logo>
        <Menu>
          <NavMenuItem to="/main">О&nbsp;компании</NavMenuItem>
          <NavMenuItem to="/products">Продукция</NavMenuItem>
          <NavMenuItem to="/contacts">Контакты</NavMenuItem>
          <Burger
            open={isOpen}
            onClick={() => this.setState({ openLeft: !isOpen })}
          >
            <span />
            <span />
            <span />
            <span />
          </Burger>
          <StyledDrawer
            right={true}
            width={300}
            fadeOut
            open={isOpen}
            onChange={open => this.setState({ openLeft: open })}
            noTouchOpen={false}
            noTouchClose={false}
          >
            <div style={{ width: '100%' }}>
              <div style={{ padding: '2em' }}>
                <MenuWrapper>
                  <MenuItem to="/main" activeClassName="selected">
                    О компании
                  </MenuItem>
                  <MenuItem to="/products" activeClassName="selected">
                    Продукция
                  </MenuItem>
                  <MenuItem to="/contacts" activeClassName="selected">
                    Контакты
                  </MenuItem>
                </MenuWrapper>
              </div>
            </div>
          </StyledDrawer>
        </Menu>
      </NavBarWrapper>
    );
  }
}

export default NavBar;
