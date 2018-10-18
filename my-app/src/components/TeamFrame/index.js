import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
import { TeamCard } from '../TeamCard';
import axios from 'axios';
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
  text-align: center;
  `};
`;

export class TeamFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://u2289.blue.elastictech.org/wp-json/wp/v2/participants-api?_embed',
      )
      .then(res => {
        this.setState({
          posts: res.data,
        });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '400px',
          alignItems: 'center',
          background: '#f4f4f4',
        }}
      >
        <CatCardWrapper>
          {this.props.header && <TextCaption>Наша команда:</TextCaption>}
          {this.state.posts.map(post => (
            <TeamCard
              title={post.title.rendered}
              text={post.content.rendered}
              key={post.id}
              image={post._embedded['wp:featuredmedia'][0].source_url}
            />
          ))}
        </CatCardWrapper>
      </div>
    );
  }
}

export default TeamFrame;
