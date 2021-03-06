import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
//  import ph1 from './ph1.jpeg';

const Overlay = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Montserrat';
  width: 182px;
`;

const Picture = styled.img`
  height: 130px;
  width: 130px;
  ${media.phone`
  width: 80px;
  height: 80px;
  `};
  object-fit: cover;
  border-radius: 50%;
`;

const LittleTitle = styled.div`
  ${media.desktop`
  font-size: 14px;
  text-align: center;
  `};
  ${media.phone`
  font-size: 9px;
  margin-top: 20px;
  `};
  font-size: 15px;

  font-weight: 700;
  margin-top: 38px;
`;

const PositionCaption = styled.div`
  ${media.desktop`
  font-size: 15px;
  text-align: center;
  `};
  ${media.phone`
  font-size: 11px;
  margin-top: 0px;
  `};
  opacity: 0.5;
  font-size: 17px;
  font-weight: 500;
  margin-top: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
export class TeamCard extends React.Component {
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
      <Overlay>
        <Picture src={this.props.image} alt="lol" />
        <LittleTitle>{this.props.title}</LittleTitle>
        <PositionCaption
          dangerouslySetInnerHTML={{ __html: this.props.text }}
        />
      </Overlay>
    );
  }
}

export default TeamCard;
