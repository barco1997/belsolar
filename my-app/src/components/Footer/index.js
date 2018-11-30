import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
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
  letter-spacing: 0.75px;
  display: flex;
  flex-direction: column;
  color: #717171;
  font-family: 'Montserrat';
  font-weight: 500;
`;

const UpperFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0px -30px;
  font-size: 13px;

  background: #f9f9f9;
  min-height: 210px;
  padding-bottom: 15px;
`;

const LowerFooter = styled.div`
  width: 100%;
  height: 80px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: white;
  background: #2ecc71;
  align-items: center;
  & > p {
    width: 77%;
  }
`;

const FooterColumn = styled.div`
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  & > div {
    margin-bottom: 9px;
  }
  & > :nth-child(1) {
    margin-top: 50px;
    color: black;
    line-height: 1;
  }
  ${media.tablet`
  display: none;
  
  `};
`;
const FooterColumnSpecial = styled.div`
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  & > div {
    margin-bottom: 9px;
  }
  & > :nth-child(1) {
    margin-top: 50px;
    color: black;
    line-height: 1;
  }
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
        <UpperFooter>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',

              width: '77%',
            }}
          >
            <FooterColumn>
              <p>Продукты</p>
              <div>Широкоформат</div>
              <div>Наружка</div>
              <div>Полиграфия</div>
              <div>Дизайн</div>
            </FooterColumn>
            <FooterColumn>
              <p>Услуги</p>
              <div>Широкоформат</div>
              <div>Наружка</div>
              <div>Полиграфия</div>
              <div>Дизайн</div>
            </FooterColumn>
            <FooterColumnSpecial>
              <p>Контакты</p>
              <div>Куйбышева 9, каб. 310</div>
              <div>8 0162 23 67 91</div>
              <div>info@bel-solar.by</div>
            </FooterColumnSpecial>
          </div>
        </UpperFooter>
        <LowerFooter>
          <p>© 2018 BELSOLAR. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
        </LowerFooter>
      </FooterWrapper>
    );
  }
}

export default Footer;
