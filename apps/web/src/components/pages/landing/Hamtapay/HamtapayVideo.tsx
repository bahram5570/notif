'use client';

import { useEffect, useRef, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';

const HamtapayVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) {
      return;
    }

    const handleEnd = () => setShowCover(true);
    const handlePlay = () => setShowCover(false);

    el.addEventListener('ended', handleEnd);
    el.addEventListener('play', handlePlay);

    return () => {
      el.removeEventListener('ended', handleEnd);
      el.removeEventListener('play', handlePlay);
    };
  }, []);

  const playHandler = () => {
    const el = videoRef.current;

    if (el) {
      el.play();
      setShowCover(false);
    }
  };

  return (
    <div className="relative w-[calc(100%-32px)] aspect-[9/16] rounded-2xl my-6 bg-green-300">
      {showCover && (
        <div className="absolute top-0 left-0 right-0 bottom-0" onClick={playHandler}>
          <CustomImage src="/assets/images/pregnancyVideoCover.webp" alt="" fill={true} className="object-contain" />
        </div>
      )}

      <video
        ref={videoRef}
        controls={true}
        autoPlay={false}
        className={`rounded-2xl ${showCover ? 'opacity-0' : 'opacity-100'}`}
      >
        <source src="/assets/test1.mov" />
      </video>
    </div>
  );
};

export default HamtapayVideo;
