import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';

const CatalogueCardWrapper = styled.div`
  /*flex-direction: row;
  flex-wrap: ${props => (props.right ? 'wrap-reverse' : 'wrap')};*/
  /*min-height: 580px;*/
  display: flex;
  flex-direction: row;
  padding: 80px 12vw;
  align-items: center;
  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: normal;
  background: ${props => (props.right ? 'white' : '#f4f4f4')};
  ${media.desktop`
  
  min-height: 500px;
  font-size: 15px;
  
  `};
  ${media.tablet`
    padding: 60px 7vw;
  `};
  ${media.phone`
    padding: 20px 7vw;
  `};
`;

const SubWrapper = styled.div`
/*flex-direction: row;
flex-wrap: ${props => (props.right ? 'wrap-reverse' : 'wrap')};*/

display: block;



`;

const Header = styled.div`
  ${media.desktop`
  font-size: 28px;
  text-align: flex-start;
  
  
  `};
  ${media.phone`
  margin-top: 0px;
  
  `};

  font-size: 40px;
  font-weight: 700;
  margin-top: 40px;
`;

const Imagine = styled.div`
  ${media.tablet`
  padding-right: 0;
  padding-left: 0;
  
  align-items: center;
  `};

  padding-right: ${props => (props.right ? '12vw' : '0px')};
  padding-left: ${props => (props.right ? '20px' : '12vw')};
  align-items: ${props => (props.right ? 'flex-end' : 'flex-start')}
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const Image = styled.img`
  float: ${props => (props.right ? 'right' : 'left')};
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
  
  padding-right: ${props => (props.right ? '20px' : '7vw')};
  `};

  ${media.tablet`
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  `};
  padding-right: 20px;
  padding-left: ${props => (props.right ? '12vw' : '0')};
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  flex: 2;

  padding-bottom: 42px;
  margin-bottom: 10px;
`;

const LittleText = styled.div`
  opacity: 0.5;

  font-size: 17px;
  font-weight: normal;
  margin-top: 38px;
  margin-bottom: 50px;
  /*max-width: 480px;*/
  ${media.desktop`
  font-size: 12px;
  
  margin-top: 28px;
  `};
  ${media.phone`
  
  
  
  `};
`;

export class NewCard extends React.Component {
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
        {/*this.props.right && (
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
        )*/}
        <SubWrapper>
          <Image src={this.props.img} alt="ahahah" right={this.props.right} />

          <Header>{this.props.title}</Header>
          <LittleText>{this.props.text}</LittleText>
        </SubWrapper>
      </CatalogueCardWrapper>
    );
  }
}

export default NewCard;
