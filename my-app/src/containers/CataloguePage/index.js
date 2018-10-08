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
import CatalogueCard from '../../components/CatalogueCard/index';

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
  font-size: 27px;
  flex-direction: column;
  & > :nth-last-child(2) {
    margin-bottom: 40px;
  }
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

/* const BottomPhotos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 8vh;
`; */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable quotes */
export class MoreInfoPage extends React.Component {
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
          posts: res.data.posts.filter(post => post.categories.catalogues),
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
        </StyledBar>
        <BackGround>
          <div
            style={{
              height: '100%',
              minHeight: '100vh',
              flexDirection: 'column',
              display: 'flex',
            }}
          >
            <div style={{ paddingTop: '105px', margin: '-40px 0px' }}>
              {this.state.posts.map(post => (
                <CatalogueCard
                  title={removeUnicode(post.title)}
                  description={removeUnicode(post.content)}
                  image={post.featured_image}
                />
              ))}
            </div>
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
