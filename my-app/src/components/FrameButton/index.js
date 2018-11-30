/**
 *
 * SendButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//  import { Link } from 'react-router-dom';

const Button = styled.div`
  text-decoration: none;
  border-width: 0px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  background: ${props => (props.background ? props.background : 'black')};
  color: ${props => (props.color ? props.color : 'white')};
  max-width: 180px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 300ms ease-in-out;
  font-size: 17px;
  font-weight: 700;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
  & > * {
    margin-top: -4px;
  }
`;

const FrameButton = ({ children, color, action, background }) => (
  <Button
    onClick={() => {
      action();
    }}
    color={color}
    background={background}
  >
    {children}
  </Button>
);

FrameButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  action: PropTypes.func,
};

export default FrameButton;
