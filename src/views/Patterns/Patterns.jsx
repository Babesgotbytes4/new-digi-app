import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import Title from "../../components/Title";
import Summary from "../../components/Summary";

const Base = styled.div`
  padding: 2rem 1rem 6rem;
`;

const LightBackground = styled.div`
  padding: 1rem;
`;

const DarkBackground = styled.div`
  padding: 1rem;
  background: ${tokens.shade.blue.solid};
`;

export const Patterns = () => {
  return (
    <Base>
      <h1>Patterns</h1>

      <section>
        <h2>Text</h2>
        <LightBackground>
          <Text size="s">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>

          <hr />

          <Text size="m">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <hr />

          <Text size="l">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </LightBackground>
        <hr />

        <LightBackground>
          <Text size="s" importance="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>

          <hr />

          <Text size="m" importance="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <hr />

          <Text size="l" importance="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </LightBackground>
        <hr />

        <DarkBackground>
          <Text size="s" inverse>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <hr />

          <Text size="m" inverse>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <hr />

          <Text size="l" inverse>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </DarkBackground>

        <hr />

        <DarkBackground>
          <Text size="s" inverse importance="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <hr />

          <Text size="m" inverse importance="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <hr />

          <Text size="l" inverse importance="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </DarkBackground>
      </section>

      <section>
        <h2>Button</h2>
        <LightBackground>
          <Button importance="primary">Hello World!</Button>
          <Button importance="secondary">Hello World!</Button>
        </LightBackground>

        <DarkBackground>
          <Button importance="primary" inverse>
            Hello World!
          </Button>
          <Button importance="secondary" inverse>
            Hello World!
          </Button>
          <Button inverse full>
            Hello World!
          </Button>
        </DarkBackground>
      </section>

      <section>
        <h2>Title</h2>

<LightBackground>
        <Title level={3}>Hello World!</Title>
        <Title level={3} size='l'>Hello World!</Title>
        </LightBackground>

        <DarkBackground>
        <Title level={3} inverse>Hello World!</Title>
        <Title level={3} size='l' inverse>Hello World!</Title>
        </DarkBackground>
      </section>

      <section>
        <h2>Summary</h2>

        <Summary href="#" title='John Smith' image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" lastActivity={new Date()}/>

        <Summary href="#" title='Powerpoint' difficulty='Expert' timeAsMinutes={360} image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"/>
        <Summary href="#" difficulty='Beginner' title='Keyboard' difficulty="Beginner" title="Keyboard" image={45} timeAsMinutes={90}/>
        </section>
    </Base>
  );
};

export default Patterns;
