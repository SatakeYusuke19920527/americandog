import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string; // URLの型をstringとして指定
}


const VideoPlayer: React.FC<VideoPlayerProps>= ({ url }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <div>
      <ReactPlayer url={url} controls />
    </div>
  );
};

export default VideoPlayer;