import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
import axios from 'axios';
import ServiceItem from '../ServiceItem/index';
import LinkButton from '../LinkButton/index';
const Description = styled.div`
  max-width: 690px;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const LowRow = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px -20px;
  margin-top: 35px;
  ${media.desktop`
  justify-content: center;
  `};
  & > div {
    margin: 15px 20px;
  }
  & > div:nth-last-child(1) {
    margin-top: 35px;
  }
`;

const MoreCapture = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 20px;
  & > :nth-child(2) {
    margin-left: 15px;
  }
  ${media.desktop`
  justify-content: center;
  & > :nth-child(2) {
    margin-right: 15px;
    margin-top: 10px;
  }
  
  `};
`;
/* const LowRowItem = styled.div`
  display: flex;
`; */

const CatalogueCardWrapper = styled.div`
  flex-direction: column;
  min-height: 790px;
  display: flex;
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

const Header = styled.div`
  ${media.desktop`
  font-size: 32px;
  
  `};

  font-size: 40px;
  font-weight: 700;
  margin-top: 150px;
  ${media.phone`
  margin-top: 35px;
  `};
`;

export class ServicesFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://u2289.blue.elastictech.org/wp-json/wp/v2/services-api?_embed',
      )
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 3),
        });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }
  //}
  render() {
    return (
      <CatalogueCardWrapper>
        <Header>Наши услуги:</Header>

        <Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Description>

        <LowRow>
          {this.state.posts.map(post => (
            <ServiceItem
              title={post.title.rendered}
              description="wow"
              to="/main"
              key={post.id}
              background={post._embedded['wp:featuredmedia'][0].source_url}
            />
          ))}
          <MoreCapture>
            <div>Lorem ipsum dolor sit amet, conse ctetur > </div>
            <LinkButton background="white" color="#2346ff" to="/services">
              Смотреть все
            </LinkButton>
          </MoreCapture>
        </LowRow>
      </CatalogueCardWrapper>
    );
  }
}

export default ServicesFrame;