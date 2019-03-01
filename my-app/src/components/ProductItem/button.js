/**
 *
 * SendButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../utils/media';
/* eslint-disable indent */
const Button = styled(Link)`
  text-decoration: none;
  border-width: 0px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  background: ${props => (props.background ? props.background : 'black')};
  color: ${props => (props.color ? props.color : 'white')};

  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;

  transition: background 300ms ease-in-out;
  font-size: 11px;
  ${media.phone`
  font-size: 8px;
  height: 38px;
  `};
  font-weight: 700;
  &:hover {
    background: rgba(0, 0, 0, 0.61);
  }

  & > * {
    padding-right: 12px;
    margin-top: 6px;
    margin-left: -14px;
    ${media.phone`
    margin-left: -42px;
  `};
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    ul {
      li {
        margin: 0 0 24px;

        list-style-type: none;
      }
    }
    .the-arrow {
      width: 40px;

      transition: all 0.2s;

      &.-left {
        position: absolute;
        top: 60%;
        left: 0;

        > .shaft {
          width: 0;
          background-color: white;

          &:before,
          &:after {
            width: 0;
            background-color: white;
          }

          &:before {
            transform: rotate(0);
          }

          &:after {
            transform: rotate(0);
          }
        }
      }

      &.-right {
        top: 3px;

        > .shaft {
          width: 40px;
          ${media.phone`
      width: 28px;
  `};
          transition-delay: 0.2s;

          &:before,
          &:after {
            width: 8px;
            transition-delay: 0.3s;
            transition: all 0.5s;
          }

          &:before {
            transform: rotate(40deg);
          }

          &:after {
            transform: rotate(-40deg);
          }
        }
      }

      > .shaft {
        background-color: white;
        display: block;
        height: 1px;
        position: relative;
        transition: all 0.2s;
        transition-delay: 0;
        will-change: transform;

        &:before,
        &:after {
          background-color: white;
          content: '';
          display: block;
          height: 1px;
          position: absolute;
          top: 0;
          right: 0;
          transition: all 0.2s;
          transition-delay: 0;
        }

        &:before {
          transform-origin: top right;
        }

        &:after {
          transform-origin: bottom right;
        }
      }
    }

    .animated-arrow {
      display: inline-block;
      color: white;
      font-size: 1.25em;

      text-decoration: none;
      position: relative;
      transition: all 0.2s;

      ${props =>
        props.open &&
        `
        &:hover {color: #eaeaea;

        > .the-arrow.-left {
          > .shaft {
            width: 40px;
            transition-delay: 0.1s;
            background-color: #eaeaea;

            &:before,
            &:after {
              width: 1px;
              transition-delay: 0.1s;
              background-color: #eaeaea;
            }

            &:before {
              transform: rotate(40deg);
            }

            &:after {
              transform: rotate(-40deg);
            }
          }
        }

        > .main {
          transform: translateX(40px + 16px);

          > .the-arrow.-right {
            > .shaft {
              width: 0;
              transform: translateX(200%);
              transition-delay: 0;

              &:before,
              &:after {
                width: 0;
                transition-delay: 0;
                transition: all 0.1s;
              }

              &:before {
                transform: rotate(0);
              }

              &:after {
                transform: rotate(0);
              }
            }
          }
        }
      }`};

      > .main {
        display: flex;
        align-items: center;
        transition: all 0.2s;

        > .text {
          margin: 0px 8px -7px 13px;
          line-height: 1.1;
          min-height: 30px;
          display: flex;
          align-items: center;
        }

        > .the-arrow {
          position: relative;
        }
      }
    }
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class LinkButton extends React.Component {
  //  constructor(props, context) {
  //  super(props, context);
  //    this.state = {
  //    id: this.getId(),
  //  };
  //  this.getId = this.getId.bind(this);
  //}
  state = {
    openLeft: false,
  };
  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  // onMouseOver={() => this.setState({ openLeft: true })}
  //onBlur={() => this.setState({ openLeft: false })}
  render() {
    const isOpen = this.state.openLeft;
    return (
      <Button
        to={this.props.to}
        color={this.props.color}
        background={this.props.background}
        open={isOpen}
      >
        <div className="container">
          <ul>
            <li>
              <div className="animated-arrow">
                <span className="the-arrow -left">
                  <span className="shaft" />
                </span>
                <span className="main">
                  <span className="text">{this.props.children}</span>
                  <span className="the-arrow -right">
                    <span className="shaft" />
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Button>
    );
  }
}

LinkButton.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default LinkButton;
