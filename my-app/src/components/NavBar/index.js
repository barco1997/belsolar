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
import logo from './logo.png';
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

  display: none;
  ${media.desktop`display: block;`};
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
  justify-content: space-between;

  align-items: center;
  background: ${props => (props.color ? props.color : 'black')};
`;

const AdditionalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1920px;
  margin: 0 auto;

  color: white;
  font-family: 'Montserrat';
  font-weight: medium;
  font-size: 13px;
`;

const LanguageToggle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-weight: normal;
  ${media.desktop`display: none;`};

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px;
  }
`;
const Ru = styled.div`
  color: white;
  background: #2346ff;
`;

const En = styled.div`
  color: #949494;
  background: #2b2b2b;
`;

const Number = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  flex-direction: row;
  font-weight: normal;
  align-items: center;
  background: #2346ff;
  padding-left: 30px;
  ${media.desktop`display: none;`};
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  height: 33px;
  margin-bottom: -2px;
  margin-left: -30px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;

  margin: 0px -15px;
  & > * {
    margin: 0px 15px;
  }
`;

const NavMenuItem = styled(Link)`
  padding: 7px 0px;
  text-decoration: none;
  color: #949494;
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
  // return currentLocation; <NavMenuItem to="/main">О&nbsp;компании</NavMenuItem>
  //}
  render() {
    const isOpen = this.state.openLeft;
    return (
      <AdditionalWrapper>
        <NavBarWrapper color={this.props.color}>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <Logo to="/main">
              <img style={{ height: '30px' }} src={logo} alt="lol" />
            </Logo>
          </div>
          <div style={{ marginRight: '30px' }}>
            <Menu>
              <NavMenuItem to="/main">ГЛАВНАЯ</NavMenuItem>

              <NavMenuItem to="/products">ПРОДУКТЫ</NavMenuItem>
              <NavMenuItem to="/catalogue">УСЛУГИ</NavMenuItem>
              <NavMenuItem to="/aboutus">О&nbsp;КОМПАНИИ</NavMenuItem>

              <NavMenuItem to="/collaboration">ПАРТНЕРЫ</NavMenuItem>
              <NavMenuItem to="/contacts">КОНТАКТЫ</NavMenuItem>
              <LanguageToggle>
                <En>En</En>
                <Ru>Ru</Ru>
              </LanguageToggle>

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
                      <MenuItem to="/main">ГЛАВНАЯ</MenuItem>

                      <MenuItem to="/products">ПРОДУКТЫ</MenuItem>
                      <MenuItem to="/catalogue">УСЛУГИ</MenuItem>
                      <MenuItem to="/aboutus">О&nbsp;КОМПАНИИ</MenuItem>

                      <MenuItem to="/collaboration">ПАРТНЕРЫ</MenuItem>
                      <MenuItem to="/contacts">КОНТАКТЫ</MenuItem>
                    </MenuWrapper>
                  </div>
                </div>
              </StyledDrawer>
            </Menu>
          </div>
        </NavBarWrapper>
        <Number>+375 (29) 622-41-41</Number>
      </AdditionalWrapper>
    );
  }
}

export default NavBar;
