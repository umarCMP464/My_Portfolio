import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Umar Ali   <br />
       </SectionTitle>
      <SectionText>
        I love video games and graphics design, programming, teaching and drinking tea. I love helping people anyway I can to the best of my ability. I have taught classes in the past concerning computer programming in the presence of a professor.
      </SectionText>
      <Button onClick={() => window.location = 'https://static.videezy.com/system/resources/previews/000/042/543/original/DNA-Background.mp4'}> Details</Button>
    </LeftSection>
  </Section>
);

export default Hero;