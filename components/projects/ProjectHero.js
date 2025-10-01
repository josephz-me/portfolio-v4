import GridContainer from '../GridContainer';
import React, { useState, useEffect } from 'react';
import CardVideo from '../CardVideo';
import Media from '../Media';

export default function ProjectHero(props) {
  return (
    <Media
      className="select-none relative overflow-hidden mb-2 md:mb-6 mt-0 h-[60vw] md:h-[50vw] object-cover w-full grid col-span-12 border border"
      isVideo={props.isVideo}
      src={props.content}
    />
  );
}
