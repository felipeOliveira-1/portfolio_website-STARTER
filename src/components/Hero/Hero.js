import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá, <br />
        Seja bem-vindo
      </SectionTitle>
      <SectionText>
      Sou um desenvolvedor dedicado e bastante eficiente. Possuo certificações
        relevantes na área de tecnologia. Busco aprimorar minhas habilidades em
        iniciativas DevOps e Software Engineering.
      </SectionText>
      
    </LeftSection>
  </Section>
);

export default Hero;
