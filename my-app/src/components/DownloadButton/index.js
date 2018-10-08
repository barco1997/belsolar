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
  background: ${props => (props.color ? props.color : 'white')};
  color: black;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  transition: background 300ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.61);
  }
  & > * {
    margin-top: -4px;
  }
`;

const DownloadButton = ({ children, color, to }) => (
  <Button to={to} color={color}>
    {children}
  </Button>
);

DownloadButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default DownloadButton;
