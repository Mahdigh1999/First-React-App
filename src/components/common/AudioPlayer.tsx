// import React from 'react';
import { getMusics } from "../../services/audio";
import { useState } from "react";

import DisplayTrack from "./DisplayTrack";

const AudioPlayer = () => {
  const [track, setTrack] = useState(getMusics());
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const changeActiveTrack = (musicName: string) => {

    setCurrentTrack(musicName);
  };
  return (
    <div>
      {track.map((tr) => (
        <DisplayTrack
          onTrack = {changeActiveTrack}
          currentTrack={currentTrack}
          key={tr.name}
          name={tr.name}
          content={tr.content}
          image={tr.image}
        />
      ))}
    </div>
  );
};

export default AudioPlayer;
