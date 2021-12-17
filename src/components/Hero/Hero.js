import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portoflio
      </SectionTitle>
      <SectionText>
        I love video games and graphics design, programming, teaching and drinking tea. I love helping people anyway I can to the best of my ability. I have taught classes in the past concerning computer programming in the presence of a professor.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Details</Button>
    </LeftSection>
  </Section>
);

export default Hero;