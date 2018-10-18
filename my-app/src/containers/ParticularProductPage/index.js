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

import NavBar from '../../components/NavBar/index';
//  import LinkButton from '../../components/LinkButton/index';
import Footer from '../../components/Footer/index';
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

  /* this.props.match.params.id */
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
        'http://u2289.blue.elastictech.org/wp-json/wp/v2/products-api/'.concat(
          this.props.match.params.id,
        ),
      )
      .then(res => {
        let companies = [];
        let resources = [];

        const string = res.data.content.rendered;
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
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <Image back={background}>
            <MainWrapper>
              <div>
                {this.state.posts && (
                  <ProducerFrame
                    posts={this.state.posts}
                    pdfs={this.state.pdfs}
                  />
                )}
              </div>
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

export default ContactsPage;
