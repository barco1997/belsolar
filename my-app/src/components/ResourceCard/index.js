import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
//  import ph1 from './ph1.png';
const ProductItemWrapper = styled.div`
  max-width: 530px;
  width: 100%;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  font-family: 'Montserrat';
  font-weight: normal;
  font-size: 16px;

  padding-right: 10px;

  &:hover {
    background: #f4f4f4;
  }

  & > .buttonDownload {
    display: inline-block;
    position: relative;
    padding: 13px 25px;

    background-color: none;
    color: #979797;

    font-family: sans-serif;
    text-decoration: none;
    font-size: 0.9em;
    text-indent: 25px;
    direction: rtl;
    text-align: left;
  }

  & > .buttonDownload:hover {
    color: #425ff9;
  }

  & > .buttonDownload:before,
  & > .buttonDownload:after {
    content: ' ';
    display: block;
    position: absolute;
    right: 25px;
    top: 52%;
  }

  /* Download box shape  */
  & > .buttonDownload:before {
    width: 10px;
    height: 2px;
    border-style: solid;
    border-width: 0 2px 2px;
  }

  /* Download arrow shape */
  & > .buttonDownload:after {
    width: 0;
    height: 0;
    margin-right: 3px;
    margin-top: -7px;

    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: transparent;
    border-top-color: inherit;

    animation: downloadArrow 2s linear infinite;
    animation-play-state: paused;
  }

  & > .buttonDownload:hover:before {
    border-color: #425ff9;
  }

  & > .buttonDownload:hover:after {
    border-top-color: #425ff9;
    animation-play-state: running;
  }

  /* keyframes for the download icon anim */
  @keyframes downloadArrow {
    /* 0% and 0.001% keyframes used as a hackish way of having the button frozen on a nice looking frame by default */
    0% {
      margin-top: -7px;
      opacity: 1;
    }

    0.001% {
      margin-top: -15px;
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      margin-top: 0;
      opacity: 0;
    }
  }
`;
const SaveText = styled.div`
  ${media.phone`
  display: none;
  `};
`;

const Header = styled.div`
  flex: 1;
  padding: 8px 0px;
  padding-left: 10px;
  ${media.phone`
  font-size: 17px;
  `};
  font-size: 20px;
  color: black;
`;

/* eslint-disable react/prefer-stateless-function */
export class ResourceCard extends React.Component {
  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  render() {
    return (
      <ProductItemWrapper>
        <Header>{this.props.item.name}</Header>
        <a
          href={this.props.item.src}
          className="buttonDownload"
          download
          rel="noopener noreferrer"
          target="_blank"
        >
          <SaveText>Скачать PDF</SaveText>
        </a>
      </ProductItemWrapper>
    );
  }
}

export default ResourceCard;
