import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsExample = [
  {
      title: 'Education',
      description: 'Lehman College Computer Science student, BCC graduate'
  },
  {
      title: 'Job skills',
      description: 'food service, customer service, teaching'
  },
  {
    title: 'Interests',
    description: 'Scientific solutions to modern problems, problems of programming, graphics design, technology, and the natural world such as animals'
  },
  ]

const Projects = () => (
  <Section nopadding id = "projects">
    <SectionDivider />
    <SectionTitle main>Achievements</SectionTitle>
    <GridContainer>
    {projectsExample.map((project) => (
        <div>
          {project.title}
          <br />
          {project.description}
        </div>
      ))}
    </GridContainer>



  </Section>
);

export default Projects;