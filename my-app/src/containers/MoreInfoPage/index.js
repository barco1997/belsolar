/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';
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
import More2 from './More2.png';
import More3 from './More3.png';
import More4 from './More4.png';
import More5 from './More5.png';
import More6 from './More6.png';
import More7 from './More7.png';

//  import YandexMapsContainer from '../../components/YandexMapsContainer/index';
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
  font-family: 'Century Gothic';
  font-size: 32px;
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
  font-size: 21px;
  text-decoration: none;
  color: black;

  justify-content: center;
  flex-wrap: wrap;
  line-height: 35px;
  margin-top: 50px;
  & > :nth-child(1) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  & > :nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: -20px;
  }
`;

const MainImage = styled.img`
  margin-top: 3px;
  width: 350px;
  height: 201px;
`;

const Description = styled.div`
  width: 581px;

  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 170px;
  }
`;

const LowRow = styled.div`
  max-width: 1011px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: -0px -15px;
`;

const LowRowItem = styled.img`
  margin: 15px 15px;
  width: 137px;
  height: 100px;
`;

/* const BottomPhotos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 8vh;
`; */
/* eslint-disable react/prefer-stateless-function */
export class MoreInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      images: [],
    };
  }
  componentDidMount() {
    console.log('crap man', this.props.match.params.id);
    axios
      .get(
        'http://public-api.wordpress.com/rest/v1/sites/positano191751113.wordpress.com/posts/'.concat(
          this.props.match.params.id,
        ),
      )
      .then(res => {
        this.setState({
          post: res.data,
        });
        console.log(this.state.post);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <CouponInfoWrapper>
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <div
            style={{
              height: '100%',
              minHeight: '100vh',
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{ paddingTop: '120px' }}
              dangerouslySetInnerHTML={{ __html: this.state.post.title }}
            />
            <InfoWrapper>
              <MainImage src={this.state.post.featured_image} alt="image" />
              <Description
                dangerouslySetInnerHTML={{ __html: this.state.post.excerpt }}
              />
            </InfoWrapper>
            <LowRow>
              <LowRowItem src={More2} alt="image" />
              <LowRowItem src={More3} alt="image" />
              <LowRowItem src={More4} alt="image" />
              <LowRowItem src={More5} alt="image" />
              <LowRowItem src={More6} alt="image" />
              <LowRowItem src={More7} alt="image" />
            </LowRow>
          </div>
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </BackGround>
      </CouponInfoWrapper>
    );
  }
}

export default MoreInfoPage;
