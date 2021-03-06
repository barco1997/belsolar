import React from 'react';
//  import PropTypes from 'prop-types';
import { media } from '../../utils/media';
//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';

//onClick={this.props.action(this.props.id)}  import ph1 from './ph1.png';
const ProductItemWrapper = styled.div`
  width: 240px;
  height: 160px;
  ${media.phone`
  width: 140px;
  height: 100px;
  `};
  display: flex;
  flex-direction: column;
  background: white;
  border-style: solid;
  border-width: 2px;
  color: ${props => (props.activeNow ? 'black' : '#d1d1d1')};
  &:hover {
    color: black;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  ${media.phone`
  font-size: 21px;
  `};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserrat';
  font-weight: normal;
  font-size: 24px;
`;

/* eslint-disable react/prefer-stateless-function */
export class ProducersCard extends React.Component {
  render() {
    console.log('wonderful world', this.props.active, this.props.id);
    return (
      <ProductItemWrapper activeNow={this.props.active === this.props.id}>
        <Overlay
          onClick={() => {
            this.props.action(this.props.id);
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
            }}
          >
            {this.props.title}
          </div>
        </Overlay>
      </ProductItemWrapper>
    );
  }
}

export default ProducersCard;
