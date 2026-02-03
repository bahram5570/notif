import { useRef, useState } from 'react';

import PauseIcon from '@assets/icons/Pause.svg';
import PlayIcon from '@assets/icons/Play.svg';
import { textShorter } from '@repo/core/utils/scripts';

import useFetchAudio from './__hooks__/useFetchAudio';
import { VoiceMessagePlayerPropsType } from './type';

const VoiceMessagePlayer = ({ voiceUrl }: VoiceMessagePlayerPropsType) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { audioSrc } = useFetchAudio({ voiceUrl });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const name = textShorter(voiceUrl, 24);

  return (
    <div className="flex items-center gap-2 bg-impo_Grey_100 rounded-xl">
      <button
        disabled={!audioSrc}
        onClick={togglePlay}
        className=" rounded-full w-12 h-12 flex justify-center items-center bg-impo_Primary_PrimaryContainer"
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-auto fill-impo_Primary_Primary" />
        ) : (
          <PlayIcon className="w-5 h-auto fill-impo_Primary_Primary" />
        )}
      </button>

      <audio
        ref={audioRef}
        src={audioSrc || ''}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <span className="text-sm text-impo_Grey_700">{name}</span>
    </div>
  );
};

export default VoiceMessagePlayer;
