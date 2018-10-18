/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';
import { media } from '../../utils/media';
//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
//  import axios from 'axios';
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
//  import LinkButton from '../../components/LinkButton/index';
import Footer from '../../components/Footer/index';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';
import background from './main.png';

import { ProductsFrame } from '../../components/ProductsFrame';

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
`;
const Image = styled.div`
  background-image: url(${props => props.back}); /* The image used */
  background-position: center top;
  background-repeat: no-repeat; /* Do not repeat the image background-position: center;*/
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  min-height: 100vh;

  /* The image used */
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

const MainWrapper = styled.div`
  margin-top: 32vh;
  ${media.desktop`
  font-size: 15px;
  `};
  ${media.phone`
  margin-top: 40px;
  `};

  color: black;
  & > * {
    margin-top: 30px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class ProductsPage extends React.Component {
  render() {
    return (
      <CouponInfoWrapper>
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <Image back={background}>
            <MainWrapper>
              <ProductsFrame />
            </MainWrapper>
          </Image>

          <StyledFooter>
            <Footer />
          </StyledFooter>
        </BackGround>
      </CouponInfoWrapper>
    );
  }
}

export default ProductsPage;
