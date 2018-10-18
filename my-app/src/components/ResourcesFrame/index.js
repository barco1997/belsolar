import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
//  import axios from 'axios';
import ResourceCard from '../ResourceCard/index';

const LowRow = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;
  margin-top: 30px;
  ${media.desktop`
  justify-content: center;
  
  `};

  & > div {
    margin: 10px 0px;
  }

  margin-bottom: 30px;
`;

/* const LowRowItem = styled.div`
  display: flex;
`; */

const CatalogueCardWrapper = styled.div`
  flex-direction: column;
  min-height: 450px;
  display: flex;
  ${media.desktop`
  align-items: center;
  padding-left: 7vw;
  padding-right: 7vw;
  font-size: 15px;
  `};
  background: #f9f9f9;
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
  margin-top: 90px;
  ${media.phone`
  margin-top: 35px;
  `};
`;

export class ResourcesFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.setItems = this.setItems.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setItems(nextProps.posts);
  }
  setItems(value) {
    console.log('Maunt -', value);

    let items = [];
    const string = value;
    const regex = /<li><a href="(.*?)">(.*?)<\/a><\/li>/g;
    let match = regex.exec(string);
    while (match) {
      const href = match[1];
      const sourcename = match[2];
      match = regex.exec(string);
      const item = { src: href, name: sourcename };
      items.push(item);
    }
    this.setState({
      items: items,
    });
  }
  componentDidMount() {
    this.setItems(this.props.posts);
  }
  render() {
    return (
      <CatalogueCardWrapper>
        <Header>Список продукции:</Header>

        <LowRow>
          {this.state.items.map((item, index) => (
            <ResourceCard item={item} key={index} />
          ))}
        </LowRow>
      </CatalogueCardWrapper>
    );
  }
}

export default ResourcesFrame;
