/**
 *
 *
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';
import { media } from '../../utils/media';
//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';
import { wpAdminApi } from '../../constants/api';
import NavBar from '../../components/NavBar/index';
//  import LinkButton from '../../components/LinkButton/index';
import Footer from '../../components/Footer/index';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';
import background from './main.png';

import { ProducerFrame } from '../../components/ProducerFrame';
//  import { ResourcesFrame } from '../../components/ResourcesFrame';

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

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  ${media.phone`
  display: none;
  `};
`;

/* eslint-disable react/prefer-stateless-function */
export class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      pdfs: null,

      index: 0,
    };
  }

  componentDidMount() {
    axios
      .get(
        `${wpAdminApi}/wp-json/wp/v2/products-api/`.concat(
          this.props.match.params.id,
        ),
      )
      .then(res => {
        console.log('particular-post', res);
        let companies = [];
        let resources = [];
        //.replace(/\>\s\</g, '><')
        const string = res.data.content.rendered;
        console.log('particular-post', string);
        const regex = /<li>(.*?)\n<ol>\n((?:.*\n)*?)<\/ol>\n<\/li>\n/g;
        let match = regex.exec(string);
        while (match) {
          const productname = match[1];
          const resource = match[2];
          console.log('product -', productname);
          console.log('List:', resource);
          companies.push(productname);
          resources.push(resource);
          match = regex.exec(string);
        }

        this.setState({
          posts: companies,
          pdfs: resources,
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <CouponInfoWrapper>
        <ScrollToTopOnMount />
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <div style={{ marginTop: '70px' }} />
          <StyledImage src={background} alt="lol" />
          <div>
            {this.state.posts && (
              <ProducerFrame posts={this.state.posts} pdfs={this.state.pdfs} />
            )}
          </div>

          <StyledFooter>
            <Footer />
          </StyledFooter>
        </BackGround>
      </CouponInfoWrapper>
    );
  }
}

export default ContactsPage;
