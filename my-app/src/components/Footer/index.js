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
//  import CouponCard from 'components/CouponCard';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';
//  import { Link } from 'react-router-dom';

const FooterWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #545454;
  font-family: 'Century Gothic';
  padding: 0px 5px;
  & > * {
    margin: 0px 5px;
  }
`;

const Address = styled.div`
  font-size: 15px;
  color: #d7d4d4;
`;

const Copyrights = styled.div`
  text-decoration: none;
  color: #d7d4d4;
  font-size: 12px;
`;

const Credit = styled.a`
  text-decoration: none;
  color: #d7d4d4;
`;

/* eslint-disable react/prefer-stateless-function */
export class Footer extends React.Component {
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
      <FooterWrapper>
        <Address to="/">ул Гоголя 83, г. Брест</Address>
        <Copyrights>
          Copywrights Positano, Icon made by{' '}
          <Credit
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flaticon.com/authors/freepik"
          >
            Freepik
          </Credit>{' '}
          from www.flaticon.com
        </Copyrights>
      </FooterWrapper>
    );
  }
}

export default Footer;
