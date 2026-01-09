import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectBody from '../components/projects/ProjectBody';
import Spacer from '../components/projects/Spacer';
import SnakeGame from '../components/games/SnakeGame';

export default function Snake() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectTitle role="browser game">Snake</ProjectTitle>
        <ProjectBody col={2}>
          {`A classic snake game built with React and HTML5 Canvas. 
          Use the arrow keys or WASD to control the snake. 
          Eat the red food to grow longer and increase your score. 
          The game speeds up every 5 points. Don't hit the walls or yourself!`}
        </ProjectBody>
        <Spacer />
        <div className="col-start-1 col-end-13 flex justify-center py-8">
          <SnakeGame />
        </div>
        <Spacer />
      </GridContainer>
    </motion.main>
  );
}
