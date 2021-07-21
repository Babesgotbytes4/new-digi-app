import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Button as MuiButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const calcColor = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return tokens.shade.blue.solid;
  }

  if (inverse) {
    return tokens.highlight.white.solid;
  }

  if (importance === "secondary") {
    return tokens.shade.blue.solid;
  }

  return tokens.highlight.white.solid;
};

const calcBorder = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return `0 solid ${tokens.highlight.white.none}`;
  }

  if (inverse) {
    return `1px solid ${tokens.highlight.white.solid}`;
  }

  if (importance === "secondary") {
    return `1px solid ${tokens.shade.blue.solid}`;
  }

  return `0 solid ${tokens.highlight.white.none}`;
};

const calcBackground = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return tokens.highlight.white.solid;
  }

  if (inverse) {
    return tokens.highlight.white.none;
  }

  if (importance === "secondary") {
    return tokens.shade.blue.none;
  }

  return tokens.shade.blue.solid;
};

const calcHover = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return tokens.highlight.white.stronger;
  }

  if (inverse) {
    return tokens.highlight.white.lighter;
  }

  if (importance === "secondary") {
    return tokens.shade.blue.lighter;
  }

  return tokens.shade.blue.stronger;
};

const StyledButton = styled(MuiButton)`
  color: ${calcColor};
  border: ${calcBorder};
  background: ${calcBackground};
  width: ${({ full }) => (full ? "100%" : "auto")};

  &:hover {
    background: ${calcHover};
  }
`;

/**
 *
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {'primary' | 'secondary'} importance
 * @property {boolean} inverse
 * @property {boolean} full
 */

/**
 * @name Button
 *
 * @description A way for a user to trigger an action in the app
 *
 * @param {props} props
 */

export const Button = (props) => {
  const { children, importance = "secondary",
    inverse = false, full =
    false, action } = props;
  const variant = importance === "primary" ? "contained" : "outlined";

  return (
    <StyledButton componet={Link} to={action} size="large" importance=
    {importance} inverse={inverse} variant={variant} full={full}>
    {children}</StyledButton>
  );
};

export default Button;
