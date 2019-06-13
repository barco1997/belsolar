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

const Header = styled.div`
  color: white;
  font-size: 35px;
  font-family: 'Montserrat';
  font-weight: 500;
`;

const DescriptionCard = styled.div`
  color: white;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;

  ${media.desktop`
  align-items: center;
  padding-left: 7vw;
  padding-right: 7vw;
  font-size: 15px;
  `};
  background: white;
  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: normal;
  padding-left: 12vw;
  padding-right: 12vw;
`;

const DescriptionHeader = styled.div`
  width: 100%;
  color: black;
  ${media.desktop`
  font-size: 32px;
  
  `};

  font-size: 40px;
  font-weight: 700;
  margin-top: 90px;
  ${media.phone`
  margin-top: 35px;
  `};
`;

const DescriptionText = styled.div`
  width: 100%;
  color: black;
  margin-top: 60px;
  ${media.phone`
  margin-top: 35px;
  `};

  ${media.desktop`
  font-size: 12px;
  /*margin-left: 5vw;
  margin-right: 5vw;*/
  margin-top: 28px;
  `};
  opacity: 0.5;
  line-height: 1.6;
  font-size: 17px;
  font-weight: normal;
  margin-top: 38px;
`;

/* eslint-disable react/prefer-stateless-function */
export class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      pdfs: null,
      title: null,
      description: null,
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
        let description;
        //.replace(/\>\s\</g, '><')
        const string = res.data.content.rendered;
        console.log('particular-post', string);
        const littleRegex = /<p>(.*?)<\/p>/;
        let firstMatch = littleRegex.exec(string);
        if (firstMatch) {
          description = firstMatch[1];
        }
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
          title: res.data.title.rendered,
          description: description,
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log('Description', this.state.description);
    return (
      <CouponInfoWrapper>
        <ScrollToTopOnMount />
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <div
            style={{
              marginTop: '70px',
              width: '100%',
              alignItems: 'center',
              height: '230px',
              background: 'rgba(0,0,0,0)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'absolute',
            }}
          >
            <Header>{this.state.title}</Header>
          </div>
          <StyledImage src={background} alt="lol" />
          <div>
            <DescriptionCard>
              <DescriptionHeader>Описание:</DescriptionHeader>
              <DescriptionText
                dangerouslySetInnerHTML={{ __html: this.state.description }}
              />
            </DescriptionCard>
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
