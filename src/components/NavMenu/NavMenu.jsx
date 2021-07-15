import React from "react";
import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Assignment as ActiveIcon,
  Event as TrophyIcon,
  AccountCircle as AccountIcon,
  Favorite,
} from "@material-ui/icons";
import { classes } from "istanbul-lib-coverage";
import { tokens } from "../../data/tokens"
import { Link } from "react-router-dom"
const Base = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    border-top: 1px solid ${tokens.shade.black.lighter};
    background: ${tokens.highlight.white.solid};
`

/**
 *
 * @typedef {object} props
 * @property {'active' | 'score' | 'account'} current
 */

/**
 *
 * @name NavMenu
 *
 * @description TODO add description
 */

export const NavMenu = (props) => {
    const { current } = props;
    return (
        <Base>
  <BottomNavigation value={current} showLabels>
    <BottomNavigationAction component={Link} to="/active" label="Active" value="active" icon={<ActiveIcon />} />
    <BottomNavigationAction component={Link} to="/score" label="Score" value="score" icon={<TrophyIcon />} />
    <BottomNavigationAction component={Link} to="/account" label="Account" value="account" icon={<AccountIcon />} />
  </BottomNavigation>
  </Base>
    );
};

export default NavMenu