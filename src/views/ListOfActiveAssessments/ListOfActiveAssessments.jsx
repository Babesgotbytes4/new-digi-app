import React, { useEffect, useState } from "react";
import { capitalize } from 'lodash';
import styled from "styled-components";

import NavMenu from "../../components/NavMenu";
import { assessments } from "../../api/assessments";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { tokens } from "../../data/tokens";
import { Summary } from "../../components/Summary";

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
  const [data, setData] = useState(null);

  console.log(data)

  const getData = async () => {
    const response = await assessments.read();
    setData(response);
  };

  useEffect(() => getData(), []);
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
        {!data && (
          <>
            <Summary loading />
            <Summary loading />
            <Summary loading />
            <Summary loading />
          </>
        )}

        {data && data.map(
          ({ id, name, timeAndMinutes, image, difficulty }) => (
            <Summary
              key={id}
              difficulty={capitalize (difficulty)}
              href={`/assessment/${id}`}
              image={image}
              timeAsMinutes={timeAndMinutes}
              title={name}
            />
          ))}
      </main>
      <NavMenu current="active" />
    </Base>
  );
};

export default ListOfActiveAssessments;
