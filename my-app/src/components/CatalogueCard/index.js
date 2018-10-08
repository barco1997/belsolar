import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ph1 from './ph1.png';
import DownloadButton from '../DownloadButton/index';
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Century Gothic';
  font-size: 16px;
  text-decoration: none;
  color: black;

  justify-content: center;
  flex-wrap: wrap;
  line-height: 35px;
  margin-top: 3px;
  & > :nth-child(1) {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  & > :nth-child(2) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const MainImage = styled.div`
  background-image: url(${props => props.back}); /* The image used */
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin-top: 18px;
  width: 100%;
  max-width: 350px;
  height: 180px;
`;

const Description = styled.div`
  width: 590px;
  min-height: 180px;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;

    min-height: 180px;
  }
`;

const LowRow = styled.div`
  margin-top: 3px;
  width: 100%;
  max-width: 973px;
  display: flex;
`;

const CatalogueCardWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: 45px 0px;
`;

export class CatalogueCard extends React.Component {
  //  constructor(props, context) {
  //  super(props, context);
  //    this.state = {
  //    id: this.getId(),
  //  };
  //  this.getId = this.getId.bind(this);
  //}

  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  render() {
    return (
      <CatalogueCardWrapper>
        <div dangerouslySetInnerHTML={{ __html: this.props.title }} />
        <InfoWrapper>
          <MainImage
            back={this.props.image ? this.props.image : ph1}
            alt="image"
          />
          <Description
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          />
        </InfoWrapper>
        <LowRow>
          <DownloadButton to="/main" color="#EEE7E1">
            Скачать
          </DownloadButton>
        </LowRow>
      </CatalogueCardWrapper>
    );
  }
}

export default CatalogueCard;
