import React ,{ useRef, useEffect } from "react";
import Image from 'next/image'
import kowaiyo from "../movie/file.gif"
import VideoPlayer from '../components/react_Player';
import ReactPlayer from "react-player";


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
}, []);

setTimeout(() => {
  window.location.href = "/secondtest";
}, 3 * 1000);

const videoUrl = 'https://www.youtube.com/watch?v=U6gUKnbqe8w';

  return (
    <div>
      <Image src={kowaiyo} width="500" height="500" alt="kowaiyo"/>
    </div>
  )
} 

