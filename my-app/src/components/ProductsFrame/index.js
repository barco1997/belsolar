import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
import axios from 'axios';
import { wpAdminApi } from '../../constants/api';
import ProductItem from '../ProductItem/index';
import LinkButton from '../LinkButton/index';
const Description = styled.div`
  max-width: 690px;
  ${media.desktop`
  align-self: flex-start;
  
  
  `};

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
  margin: 0px -15px;
  margin-top: 20px;
  ${media.desktop`
  margin: 0vw -1.5vw;
  
  `};
  ${media.phone`
  justify-content: flex-start;
  margin: 0vw -3vw;
  
  
  `};

  & > div {
    margin: 15px 15px;
    ${media.desktop`
    margin: 1.5vw 1.5vw;
  `};
    ${media.phone`
    margin: 3vw 3vw;
  `};
  }
  & > div:nth-last-child(1) {
    margin-top: ${props => (props.main ? '35px' : '15px')};
    ${media.phone`
    margin-top: ${props => (props.main ? '35px' : '10px')};
  `};
  }
  margin-bottom: 30px;
`;

const MoreCapture = styled.div`
  width: 100%;
  ${media.desktop`
  width: 98.80%;
  `};
  ${media.phone`
  width: 100%;
  justify-content: flex-start;
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
    margin-top: 10px;
  }
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
/* const LowRowItem = styled.div`
  display: flex;
`; */

const CatalogueCardWrapper = styled.div`
  flex-direction: column;
  min-height: 690px;
  display: flex;
  padding-bottom: 20px;
  ${media.desktop`
  align-items: center;
  
  font-size: 15px;
  `};
  ${media.desktop`
 
  padding-left: 7vw;
  padding-right: 7vw;
  
  `};
  padding-left: 12vw;
  padding-right: 12vw;

  background: #fafafa;
  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: normal;
`;

const Header = styled.div`
  ${media.desktop`
  font-size: 32px;
  
  `};
  ${media.desktop`
  
  
  
  `};

  align-self: flex-start;
  font-size: 40px;
  font-weight: 700;
  margin-top: 150px;
  ${media.phone`
  margin-top: 35px;
  
  `};
`;

const SecondOrderWrapper = styled.div`
  display: flex;

  width: 100%;
  ${media.desktop`
  
  justify-content: center;
  
  `};
`;

export class ProductsFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${wpAdminApi}/wp-json/wp/v2/products-api?_embed`)
      .then(res => {
        this.setState({
          posts: this.props.main ? res.data.slice(0, 4) : res.data,
        });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <CatalogueCardWrapper>
        <Header>Наши продукты:</Header>

        <Description>
          <p>
            Солнечные панели, инверторы, инфракрасные обогреватели, зарядные
            станции для электромобилей и многое другое вы можете приобрести у
            нас.
          </p>
        </Description>
        <SecondOrderWrapper>
          <LowRow main={this.props.main}>
            {this.state.posts.map(post => (
              <ProductItem
                title={post.title.rendered}
                description="wow"
                to={`/products/${post.id}`}
                key={post.id}
                background={post._embedded['wp:featuredmedia'][0].source_url}
              />
            ))}
            {this.props.main && (
              <MoreCapture>
                <div>Lorem ipsum dolor sit amet, conse ctetur ></div>
                <ButtonWrapper>
                  <LinkButton background="white" color="#2ecc71" to="/products">
                    Смотреть все
                  </LinkButton>
                </ButtonWrapper>
              </MoreCapture>
            )}
          </LowRow>
        </SecondOrderWrapper>
      </CatalogueCardWrapper>
    );
  }
}

export default ProductsFrame;
