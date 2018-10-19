import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
//  import axios from 'axios';
import ProducersCard from '../ProducersCard/index';
import { ResourcesFrame } from '../ResourcesFrame';

const LowRow = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  margin-top: 30px;
  ${media.desktop`
  justify-content: center;
  `};

  & > div {
    margin: 15px 15px;
  }
  & > div:nth-last-child(1) {
    margin-top: ${props => (props.main ? '35px' : '15px')};
  }
  margin-bottom: 30px;
`;

/* const LowRowItem = styled.div`
  display: flex;
`; */

const CatalogueCardWrapper = styled.div`
  flex-direction: column;
  min-height: 550px;
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
  margin-top: 90px;
  ${media.phone`
  margin-top: 35px;
  `};
`;

export class ProducerFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.setId = this.setId.bind(this);
  }

  setId(value) {
    this.setState({
      index: value,
    });
    console.log('come here', value);
  }

  render() {
    return (
      <div>
        <CatalogueCardWrapper>
          <Header>Выберите компанию:</Header>

          <LowRow>
            {this.props.posts.map((post, index) => (
              <ProducersCard
                title={post}
                key={index}
                id={index}
                active={this.state.index}
                action={this.setId}
              />
            ))}
          </LowRow>
        </CatalogueCardWrapper>

        <ResourcesFrame posts={this.props.pdfs[this.state.index]} />
      </div>
    );
  }
}

export default ProducerFrame;
