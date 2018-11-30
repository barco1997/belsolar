import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';
import { media } from '../../utils/media';
//  import logo from './logo.png';
const CatCardWrapper = styled.div`
  flex-direction: row;
  display: flex;

  flex-wrap: wrap;
  padding-left: 12vw;
  padding-right: 12vw;

  margin: 25px -20px;
  & > div {
    margin: 20px 20px;
  }
  ${media.desktop`
  justify-content: center;
  padding-left: 7vw;
  padding-right: 7vw;
  
  `};
`;

const TextCaption = styled.div`
  font-size: 30px;
  width: 100%;
  color: black;
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  ${media.desktop`
  font-size: 32px;
  
  `};
`;

const ProductItemWrapper = styled.img`
  height: 100px;
`;
export class CollaborationFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.getHref = this.getHref.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        'http://u2289.blue.elastictech.org/wp-json/wp/v2/partners-api?_embed',
      )
      .then(res => {
        this.setState({
          posts: res.data,
        });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }

  getHref(value) {
    const string = value;
    const regex = /<a.*?href="(.*?)"/g;
    let match = regex.exec(string);
    const href = match[1];
    return href;
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '400px',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <CatCardWrapper>
          {this.props.header && <TextCaption>Наши партнеры:</TextCaption>}
          {this.state.posts.map(post => (
            <a href={this.getHref(post.content.rendered)}>
              <ProductItemWrapper
                alt="pokerface"
                key={post.id}
                src={post._embedded['wp:featuredmedia'][0].source_url}
              />
            </a>
          ))}
        </CatCardWrapper>
      </div>
    );
  }
}

export default CollaborationFrame;
