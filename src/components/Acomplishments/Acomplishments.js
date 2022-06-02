import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Resolução de problemas' },
  { text: 'Comunicação eficaz', },
  { text: 'Fluência de ideias', },
  { text: 'Inglês Avançado', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Outras Habilidades</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}&#10004;</BoxNum>
          <BoxText>{card.text}</BoxText>
          </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
