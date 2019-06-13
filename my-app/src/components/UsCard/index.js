import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';

const CatalogueCardWrapper = styled.div`
  flex-direction: row;
  /*min-height: 580px;*/
  display: flex;
  padding: 80px 12vw;
  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: normal;
  flex-wrap: ${props => (props.right ? 'wrap-reverse' : 'wrap')};
  background: ${props => (props.right ? 'white' : '#f4f4f4')};
  ${media.desktop`
  align-items: center;
  
  font-size: 15px;
  
  `};
  ${media.tablet`
    padding: 60px 7vw;
  `};
  ${media.phone`
    padding: 20px 7vw;
  `};
`;

const Header = styled.div`
  ${media.desktop`
  font-size: 28px;
  text-align: flex-start;
  /*margin-left: 5vw;
  margin-right: 5vw;*/
  
  `};
  ${media.phone`
  margin-top: 0px;
  
  `};

  font-size: 40px;
  font-weight: 700;
  margin-top: 42px;
`;

const Imagine = styled.div`
  ${media.tablet`
  padding-right: 0;
  padding-left: 0;
  
  align-items: center;
  `};

  padding-right: ${props => (props.right ? '0' : '0px')};
  padding-left: ${props => (props.right ? '20px' : '0')};
  align-items: ${props => (props.right ? 'flex-end' : 'flex-start')}
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const Image = styled.img`
  margin-right: ${props => (props.right ? '0px' : '70px')};
  margin-left: ${props => (props.right ? '70px' : '0px')};
  height: 320px;
  width: 565px;
  object-fit: cover;
  margin-top: 40px;
  margin-bottom: 50px;
  ${media.desktop`
  width: 370px;
  height: 250px;
  `};
  ${media.phone`
  
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
  min-width: 320px;
  `};
`;

const ContactWrap = styled.div`
  ${media.desktop`
  
  padding-right: ${props => (props.right ? '20px' : '0')};
  `};

  ${media.tablet`
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  `};
  padding-right: 20px;
  padding-left: ${props => (props.right ? '0' : '0')};
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  flex: 2;

  padding-bottom: 42px;
  margin-bottom: 10px;
`;

const LittleText = styled.div`
  ${media.desktop`
  font-size: 12px;
  /*margin-left: 5vw;
  margin-right: 5vw;*/
  margin-top: 28px;
  `};
  opacity: 0.5;
  line-height: 1.6;
  font-size: 17px;
  font-weight: normal;
  margin-top: 38px;
  max-width: 480px;
`;

export class UsCard extends React.Component {
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
      <CatalogueCardWrapper right={this.props.right}>
        {this.props.right && (
          <ContactWrap right>
            <div>
              <Header>{this.props.title}</Header>
              <LittleText>{this.props.text}</LittleText>
            </div>
          </ContactWrap>
        )}

        <Imagine right={this.props.right}>
          <Image src={this.props.img} alt="ahahah" right={this.props.right} />
        </Imagine>
        {!this.props.right && (
          <ContactWrap>
            <div>
              <Header>{this.props.title}</Header>
              <LittleText>{this.props.text}</LittleText>
            </div>
          </ContactWrap>
        )}
      </CatalogueCardWrapper>
    );
  }
}

export default UsCard;
