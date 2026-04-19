'use client';

import { useEffect, useRef, useState } from 'react';

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
    <div className="w-full px-4">
      <video
        ref={videoRef}
        controls={true}
        autoPlay={false}
        className="w-full h-auto object-cover rounded-[30px]"
        webkit-playsinline="true"
      >
        <source src="/assets/images/webView/sympathy/Comp 1_2.mov" />
      </video>
    </div>
  );
};

export default HamtapayVideo;
