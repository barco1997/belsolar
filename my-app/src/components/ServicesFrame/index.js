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
  align-self: flex-start;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;
    opacity: 0.5;
  }
`;

const LowRow = styled.div`
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px -20px;
  margin-top: 20px;

  ${media.desktop`
  margin: 0vw -1.5vw;
  
  `};

  & > div {
    margin: 20px 20px;
    ${media.desktop`
    margin: 1.5vw 1.5vw;
  `};
    ${media.phone`
    margin: 20px 20px;
  `};
  }

  ${media.phone`
  justify-content: center;
  margin: 0px -20px;
  margin-top: 20px;
  `};

  & > div:nth-last-child(1) {
    margin-top: 35px;
  }
  margin-bottom: 30px;
`;

const MoreCapture = styled.div`
  width: 100%;
  ${media.desktop`
  width: 98.80%;
  `};
  ${media.phone`
  justify-content: center;
  width: 100%;
  `};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 20px;
  & > :nth-child(2) {
    margin-left: 15px;
  }
  ${media.phone`
  
  
  & > :nth-child(2) {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px; /*pay attention here */
  }
  `};
`;
/* const LowRowItem = styled.div`
  display: flex;
`; */

const CatalogueCardWrapper = styled.div`
  flex-direction: column;
  min-height: 590px;
  display: flex;
  padding-bottom: 20px;
  ${media.desktop`
  
  padding-left: 7vw;
  padding-right: 7vw;
  font-size: 15px;
  `};
  ${media.phone`
  align-items: center;
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
  align-self: flex-start;
  font-size: 40px;
  font-weight: 700;
  margin-top: 150px;
  ${media.phone`
  margin-top: 35px;
  
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 180px;
  ${media.phone`
  justify-content: center;
  width: 100%;
  
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
            Мы можем предложить вас проектирование, монтаж, установка систем
            выработки, контроля и управления энергией и разработку уникальных
            решений специально для вас. Также мы занимаемся дистрибуцией
            продукции в сфере энергетики.
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
            <ButtonWrapper>
              <LinkButton background="white" color="#2ecc71" to="/services">
                Смотреть все
              </LinkButton>
            </ButtonWrapper>
          </MoreCapture>
        </LowRow>
      </CatalogueCardWrapper>
    );
  }
}

export default ServicesFrame;
