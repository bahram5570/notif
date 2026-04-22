let currentAudio: HTMLAudioElement | null = null;

export function registerAndPlay(audio: HTMLAudioElement) {
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    // اگر دوست داری به ابتدا برگردد:
    // currentAudio.currentTime = 0;
  }

  currentAudio = audio;

  const handlePause = () => {
    if (currentAudio === audio) currentAudio = null;
    audio.removeEventListener('pause', handlePause);
    audio.removeEventListener('ended', handlePause);
  };

  audio.addEventListener('pause', handlePause);
  audio.addEventListener('ended', handlePause);

  audio.play();
}
