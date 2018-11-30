/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { media } from '../../utils/media';
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
import FrameButton from '../../components/FrameButton/index';
import Footer from '../../components/Footer/index';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';
import background from './main.png';
import { ProductsFrame } from '../../components/ProductsFrame';
import { ServicesFrame } from '../../components/ServicesFrame';
import { ContactFrame } from '../../components/ContactFrame';
import { CollaborationFrame } from '../../components/CollaborationFrame';

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

  background-repeat: no-repeat; /* Do not repeat the image background-position: center;*/
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  margin-bottom: 200px;
  ${media.desktop`
  margin-bottom: 12vh;
  margin-left: 7vw;
  margin-right: 7vw;
  font-size: 15px;
  `};
  margin-left: 12vw;
  margin-right: 12vw;
  max-width: 720px;

  display: flex;
  flex-direction: column;

  display: flex;
  color: white;
  flex-direction: column;
  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: normal;
`;

const Header = styled.div`
  ${media.desktop`
  font-size: 40px;
  
  `};
  font-size: 49px;
  font-weight: 700;
`;

const Description = styled.div`
  margin-top: 1px;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;

    max-height: 130px;
    opacity: 0.7;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  //  constructor(props, context) {
  //  super(props, context);
  //    this.state = {
  //    id: this.getId(),
  //  };
  //  this.getId = this.getId.bind(this);
  //}
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.scrollToDomRef = this.scrollToDomRef.bind(this);
  }
  scrollToDomRef = () => {
    const myDomNode = ReactDOM.findDOMNode(this.myRef.current);
    window.scrollTo(0, myDomNode.offsetTop - 60);
  };

  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  render() {
    return (
      <CouponInfoWrapper>
        <ScrollToTopOnMount />
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <Image back={background}>
            <MainWrapper>
              <Header>Чем мы занимаемся?</Header>
              <Description>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Description>
              <div
                style={{
                  display: 'flex',

                  marginRight: '10px',
                  marginTop: '5px',
                }}
              >
                <FrameButton background="#2ecc71" action={this.scrollToDomRef}>
                  Связаться
                </FrameButton>
              </div>
            </MainWrapper>
          </Image>
          <ProductsFrame main />
          <ServicesFrame />
          <ContactFrame ref={this.myRef} />
          <CollaborationFrame />
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </BackGround>
      </CouponInfoWrapper>
    );
  }
}

export default MainPage;
