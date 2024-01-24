import React, { useEffect, useRef, useState } from "react";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { MdOutlinePauseCircle } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useTheme } from "../../App";
// import { getImageUrl } from "../../utils/image-utils";
type TrackProps = {
  name: string;
  content: string;
  image: string;
  currentTrack: string | null;
  onTrack: (musicName: string) => void;
};

const changeFormat = (num: number) => {
  let num2 = Math.floor(num / 60);
  let seconds: any = num % 60;
  seconds = seconds < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds);
  return `${num2}:${seconds}`;
};

const DisplayTrack = ({
  name,
  content,
  image,
  currentTrack,
  onTrack,
}: TrackProps) => {
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isDark } = useTheme();
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (currentTrack != name) {
      {
        ref.current?.pause();
        setIsPlaying(false)
      }
      
    }
  });

  const handlePlayPause = () => {
    !isPlaying ? ref.current?.play() : ref.current?.pause();
    setIsPlaying((prev) => !prev);

    onTrack(name);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // console.log(ref.current?.currentTime);
    setTimeProgress(Number(val));
  };
  const onDuration = () => {
    const seconds = ref.current?.duration;
    setDuration(Number(seconds));
  };
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    if (Math.abs(e.currentTarget.currentTime - timeProgress) < 1) {
      setTimeProgress(e.currentTarget.currentTime);
    } else {
      if (e.currentTarget.currentTime - timeProgress < 0)
        e.currentTarget.currentTime =
          e.currentTarget.currentTime +
          Math.abs(e.currentTarget.currentTime - timeProgress);
      else {
        e.currentTarget.currentTime =
          e.currentTarget.currentTime -
          Math.abs(e.currentTarget.currentTime - timeProgress);
      }
      setTimeProgress(e.currentTarget.currentTime);
    }
  };

  return (
    <div
   
      className={
        (!isDark ? " bg-yellow-100 " : " bg-blue-950 ") +
        "border-2 border-blue-600 my-2 rounded-lg p-3 "
      }
    >
      <div className="items-end text-lg my-2 flex">
        <img className="h-16 w-24 rounded-lg" src={image} alt="" />{" "}
        <span className="mx-2 font-semibold text-xl flex items-center pt-2">
          {name}{" "}
          <IoArrowRedoSharp className="relative top-[5px] rotate-[90deg]" />
        </span>
      </div>
      <audio
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={onDuration}
        ref={ref}
        className="block bg-gray-50 rounded-full "
        src={content}
      ></audio>
      <div className="items-center flex space-x-3 ">
        <div
          className="cursor-pointer w-[fit-content]"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <MdOutlinePauseCircle size={40} />
          ) : (
            <MdOutlinePlayCircleOutline size={40} />
          )}
        </div>
        <span>{changeFormat(timeProgress)}</span>
        <input
          className="block w-full"
          onChange={handleChange}
          step={1}
          min={0}
          max={duration}
          type="range"
          value={timeProgress}
        />
        <span>{changeFormat(duration)}</span>
      </div>
    </div>
  );
};

export default DisplayTrack;
