import React from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import { tokens } from "../../data/tokens";


const Image = styled(Paper)`
  display: none;
  height: ${({ size }) => (size === "1" ? 126 : 64)}px;
  width: ${({ size }) => (size === "1" ? 126 : 64)}px;
  object-fit: cover;
  border-radius: ${({ size }) => size === "1" ? tokens.radius.medium :
  tokens.radius.circle};
  background-color: ${tokens.shade.blue.solid};

  @media (min-width: 400px) {
    display: block;
  }
`;

export const Thumbnail = (props) => {
  const { size, url } = props;

  if (!url) {
    return (
      <Image
        size={size}
        component={url ? "img" : "div"}
        src={url || undefined}
      />
    );
  }
  return (
    <Image size={size} component={url ? "img" : "div"} src={url || undefined} />
  );
};

export default Thumbnail;

{
  /* <Image elevation={1} component="img" src={image} alt="" /> */
}
