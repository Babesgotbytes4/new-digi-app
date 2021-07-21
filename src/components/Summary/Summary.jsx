import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonBase, Chip } from "@material-ui/core";
import { format as formatDate } from "date-fns";
import { Skeleton } from "@material-ui/lab";


import { tokens } from "../../data/tokens";
import { ArrowForwardIos as ArrowIcon } from "@material-ui/icons";
import { Title } from "../Title";
import { Text } from "../Text";
import { Score } from "./Summary.Score";
import { Thumbnail }  from "../../components/Thumbnail";
import { convertMinutes } from "./Summary.convertMinutes";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${tokens.shade.black.stronger};
`;

const Image = styled.div`
  display: none;
  
  @media (min-width: 400px) {
    display: block;
  }
`;
const Content = styled.div`
  flex-grow: 1;
  padding: ${tokens.spacing.m};
  text-align: left;
`;

const StyledButtonBase = styled(ButtonBase)`
  width: 100%;
  padding: ${tokens.spacing.l};
  border-top: 1px solid ${tokens.shade.black.lighter};

  &:hover {
    background: ${tokens.shade.blue.lighter};
  }
`;

const LoadingBase = styled.div`
width: 100%;
display: flex;
align-items: center;
padding: ${tokens.spacing.l};
border-top: 1px solid ${tokens.shade.black.lighter};
height: 144px;
`;

const DetailsRow = styled.div`
  padding-top: ${tokens.spacing.s};
`;

const ChipWrap = styled.span`
  padding-right: ${tokens.spacing.xs};
`;

/**
 *
 * @typedef {object} props
 * @property {string | number} image
 * @property {string} href
 * @property {string} title
 * @property {'Beginner' | 'Intermediate' | 'Expert'} difficulty
 * @property {number} timeAsMinutes
 * @property {Date} lastActivity
 *
 */

/**
 *
 * @name Summary
 *
 * @description TODO Add description
 *
 * @param {props} props
 */

export const Summary = (props) => {
  const {
    difficulty,
    href,
    image,
    lastActivity,
    timeAsMinutes,
    title,
    loading,
  } = props;

  if (loading) {
    return (
      <LoadingBase>
        <Skeleton variant="circle" width={64} height={64} />
        
        
        <Content>
          <Title level={3} size="l">
          <Skeleton height={33} width={100} />
          </Title>

       
            <Text importance="secondary">
            <Skeleton height={33} width={160} />
            </Text>
        
        </Content>

        <ArrowIcon fontSize="small" />
      </LoadingBase>
  
    )
  }

  if (!href) throw Error("No href included");

  if ((difficulty || timeAsMinutes) && lastActivity)
    throw new Error(
      "Can't have lastActivity and timeAsMinutes/difficulty since these are mutual exclusive"
    );
  return (
    <StyledLink to={href}>
      <StyledButtonBase>
        {typeof image !== "number" && (
          <Thumbnail size="m" url={image}/>
        )}

        {typeof image === "number" && <Score value={image} />}
        <Content>
          <Title level={3} size="l">
            {title}
          </Title>

          {lastActivity && (
            <Text importance="secondary">
              Activity: {formatDate(lastActivity, "d MMM yyyy")}
            </Text>
          )}

          {difficulty && timeAsMinutes && (
            <DetailsRow>
              <ChipWrap>
                <Chip size="small" label={difficulty} />
              </ChipWrap>

              <ChipWrap>
                <Chip
                  size="small"
                  variant="outlined"
                  label={convertMinutes(timeAsMinutes)}
                />
              </ChipWrap>
            </DetailsRow>
          )}
        </Content>
        <ArrowIcon fontSize="small" />
      </StyledButtonBase>
    </StyledLink>
  );
};

export default Summary;
