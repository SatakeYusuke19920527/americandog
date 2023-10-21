import React ,{ useRef, useEffect } from "react";
import VideoPlayer from '../components/react_Player';
import ReactPlayer from "react-player";


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
}, []);

const videoUrl = 'https://www.youtube.com/watch?v=U6gUKnbqe8w';

  return (
    <div>
      <VideoPlayer url={videoUrl} />
    </div>
  )
} 

