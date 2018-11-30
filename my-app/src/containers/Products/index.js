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
import ProductsBar from '../../components/ProductsBar/index';
import ProductItem from '../../components/ProductItem/index';
import Footer from '../../components/Footer/index';

//  import GoogleMapsContainer from '../../components/GoogleMapsContainer/index';
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
  max-width: 80%;
  display: flex;

  font-family: 'Century Gothic';
  font-size: 19px;
  text-decoration: none;
  color: black;

  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 195px;
  margin-right: -30px;
  margin-left: -30px;

  & > div {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 50px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable quotes */
export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://public-api.wordpress.com/rest/v1/sites/positano191751113.wordpress.com/posts',
      )
      .then(res => {
        this.setState({
          posts: res.data.posts.filter(post => post.categories.products),
        });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }
  render() {
    function removeUnicode(props) {
      return props.replace(/&nbsp;/g, '');
    }
    return (
      <CouponInfoWrapper>
        <StyledBar>
          <NavBar />
          <ProductsBar />
        </StyledBar>
        <BackGround>
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: '100vh',
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '1440px',
            }}
          >
            <InfoWrapper>
              {this.state.posts.map(post => (
                <ProductItem
                  background={post.featured_image}
                  title={removeUnicode(post.title)}
                  description={removeUnicode(post.excerpt)}
                  to={`/products/${post.ID}`}
                />
              ))}
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

export default Products;