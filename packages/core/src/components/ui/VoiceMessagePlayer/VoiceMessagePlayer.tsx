import { useMemo, useRef, useState } from 'react';

import PauseIcon from '@assets/shared/icons/Pause.svg';
import PlayIcon from '@assets/shared/icons/Play.svg';
import { textShorter } from '@repo/core/utils/scripts';

import { useSystem } from '../../../hooks/useSystem';
import useFetchAudio from './__hooks__/useFetchAudio';
import { registerAndPlay } from './audioManager';
import { VoiceMessagePlayerPropsType } from './type';

export const VoiceMessagePlayer = ({ voiceUrl }: VoiceMessagePlayerPropsType) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { audioSrc } = useFetchAudio({ voiceUrl });
  const [isPlaying, setIsPlaying] = useState(false);
  const { appName } = useSystem();

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    registerAndPlay(audio);
  };

  const theme = useMemo<{ backgroundcolor: string; fill: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          backgroundcolor: 'bg-impo_PrimaryMan_PrimaryContainerMan',
          fill: 'fill-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          backgroundcolor: 'bg-impo_Primary_PrimaryContainer',
          fill: 'fill-impo_Primary_Primary',
        };
    }
  }, [appName]);

  const name = textShorter(voiceUrl, 24);

  return (
    <div className="flex items-center gap-2 bg-impo_Grey_100 rounded-xl">
      <button
        disabled={!audioSrc}
        onClick={togglePlay}
        className={`rounded-full w-12 h-12 flex justify-center items-center  ${theme.backgroundcolor}`}
      >
        {isPlaying ? (
          <PauseIcon className={`w-5 h-auto  ${theme.fill}`} />
        ) : (
          <PlayIcon className={`w-5 h-auto  ${theme.fill}`} />
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
