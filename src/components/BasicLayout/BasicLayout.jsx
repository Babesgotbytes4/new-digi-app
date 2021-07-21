import React from "react";
import { Button } from "../Button";
import { Title } from "../Title";
import { tokens } from "../../data/tokens";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { Text } from '../../components/Text'

const Base = styled.div`
  height: 100%;
  text-align: center;
  display:flex;
  flex-direction: column;
  padding-bottom: ${tokens.spacing.l};
  background-color: ${({ inverse }) =>
    inverse ? tokens.shade.blue.solid : tokens.highlight.white.solid};
`;

const StyledLink = styled.div`
  display: inline-block;
  margin: ${tokens.spacing.s};
  padding: ${tokens.spacing.s} ${tokens.spacing.l};
  color: ${({ inverse}) =>
   inverse ? tokens.highlight.white.stronger : tokens.shade.black.strong};
    border-radius: ${tokens.radius.medium};

&:hover {
    background-color: ${({ inverse}) =>
    inverse ? tokens.highlight.white.lighter : tokens.shade.black.lighter};
}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: ${tokens.spacing.s};
`;

const Content = styled.div`
    flex-grow: 1;
`

export const BasicLayout = (props) => {
  const { buttons = {}, inverse, title, children } = props;

  const keys = Object.keys(buttons);

  return (
    <Base inverse={inverse}>
      <Title level={1} inverse={inverse}>
        {title}
      </Title>

     <Content>
       {children}
     </Content>

      <div>
        {keys.map((key) => {
          const [type, action] = buttons[key];

           if (type === "extra") {
             return <StyledLink  to={action} inverse={inverse}>
             <Text inverse={inverse}>
                 {key}</Text></StyledLink>;
           }

          return (
            <ButtonWrapper>
              <Button full inverse={inverse} action={action} importance=
               {type}>
               {key}
              </Button>
            </ButtonWrapper>
          );
        })}
      </div>
    </Base>
  );
};

export default BasicLayout;
