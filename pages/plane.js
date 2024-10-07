import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import Link from 'next/link';
import ProjectMedia from '../components/projects/ProjectMedia';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import listAssignee from '../public/work/plane/list-assignee-cropped.jpg';
import table from '../public/work/plane/table-cropped.jpg';
import kanban from '../public/work/plane/kanban-cropped.jpg';
import timeline from '../public/work/plane/timeline-cropped.jpg';
import calendar from '../public/work/plane/calendar-cropped.jpg';
import displaySort from '../public/work/plane/display-sort.jpg';
import displayFilter from '../public/work/plane/display-filter.jpg';
import filters from '../public/work/plane/filters.jpg';

export default function Plane() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/plane.jpg" />
        <ProjectTitle role="Productivity">Plane</ProjectTitle>
        <ProjectBody col={2}>
          Plane is a software company combining task management, wikis, and
          editor features into one comprehensive productivity platform. I
          consulted and advised the team around core product surfaces. This
          included redesigning navigation and all task views from scratch
          — kanban, list, calendar, table, and timeilne view.
        </ProjectBody>
        <ProjectDetails
          role={['Product Designer']}
          collaborators={['Plane team', 'Bryce Li']}
          duration="3 months"
        />

        <ProjectMedia noShadow pt pr src={listAssignee}></ProjectMedia>
        <ProjectMedia noShadow pt pl src={filters}></ProjectMedia>
        <ProjectMedia noShadow pt pr src={table}></ProjectMedia>
        <ProjectMedia noShadow pt pr src={kanban}></ProjectMedia>
        <ProjectMedia noShadow pt pr src={displayFilter}></ProjectMedia>
        <ProjectMedia noShadow pt pr src={timeline}></ProjectMedia>
        <ProjectMedia noShadow pt pr src={displaySort}></ProjectMedia>
        <ProjectMedia noShadow pt pr src={calendar}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
