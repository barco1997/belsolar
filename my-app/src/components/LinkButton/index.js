/**
 *
 * SendButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  text-decoration: none;
  border-width: 0px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  background: ${props => (props.color ? props.color : 'black')};
  color: white;
  max-width: 80px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 300ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.61);
  }
  & > * {
    margin-top: -4px;
  }
`;

const LinkButton = ({ children, color, to }) => (
  <Button to={to} color={color}>
    {children}
  </Button>
);

LinkButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default LinkButton;
