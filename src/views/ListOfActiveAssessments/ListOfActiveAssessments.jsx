import React from "react";
import faker, { time } from "faker";
import fakerE from "faker-extra";
import styled from "styled-components";

import { useScrollToTop } from "../../hooks/useScrollToTop"
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { tokens } from "../../data/tokens";
import { Summary } from "../../components/Summary"
import NavMenu from "../../components/NavMenu";

const MOCK_ASSESSMENTS = fakerE.array([3, 20], () => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  image: faker.image.business(),
  timeAsMinutes: faker.datatype.number({ min: 10, max: 120 }),
  difficulty: faker.random.arrayElement(["Beginner", "Intermediate", "Expert"]),
}));

const Base = styled.div`
  text-align: center;
`;

const TitleWrap = styled.div`
  padding: ${tokens.spacing.l};
  background: white;
`;

const ButtonWrap = styled.div`
    position: sticky;
    left: 0;
    z-index: 5;
    top: 0;
    background: white;
  padding: ${tokens.spacing.s} ${tokens.spacing.l};
`;

export const ListOfActiveAssessments = () => {
  useScrollToTop();
  
  return (
    <Base>
        <TitleWrap>
          <Title level={1}>Active</Title>
        </TitleWrap>
<ButtonWrap>
        <Button full>Filters</Button>
     </ButtonWrap>
      <main>
      {MOCK_ASSESSMENTS.map(({ id, title, timeAsMinutes, image, difficulty }) => (
          <Summary 
            difficulty={difficulty}
            href={`/assessments/${id}`}
            image={image}
            timeAsMinutes={timeAsMinutes}
            title={title}
          />
    
      ))}
      </main>
      <NavMenu current="active" />
    </Base>
  );
};

export default ListOfActiveAssessments;
