/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';

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
import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import GoogleMapsContainer from '../../components/GoogleMapsContainer/index';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';

const CouponInfoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const BackGround = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;

  background-color: #fcfcfc; /* The image used */
`;

const StyledBar = styled.div`
  width: 100%;
  position: fixed;

  left: 0px;
  top: 0px;
  z-index: 5;
`;
const StyledFooter = styled.div`
  width: 100%;
  align-self: flex-end;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Century Gothic';
  font-size: 19px;
  text-decoration: none;
  color: black;

  justify-content: center;
  flex-wrap: wrap;
  line-height: 35px;
  margin-top: 57vh;
  & > :nth-child(1) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  & > :nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class Contacts extends React.Component {
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
      <CouponInfoWrapper>
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <div style={{ height: '100%', minHeight: '100vh' }}>
            <div style={{ paddingTop: '90px' }}>
              <GoogleMapsContainer />
            </div>
            <InfoWrapper>
              <div>
                Адрес: ул. Гоголя 83, г. Брест
                <br />
                Эмейл: gbarchuk@mail.ru <br />
                Телефон: +375297951401 <br />
              </div>
              <div>
                Пн-Пт: 10:00-18:00
                <br />
                Сб: 10:00-16:00
                <br />
              </div>
            </InfoWrapper>
          </div>
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </BackGround>
      </CouponInfoWrapper>
    );
  }
}

export default Contacts;
