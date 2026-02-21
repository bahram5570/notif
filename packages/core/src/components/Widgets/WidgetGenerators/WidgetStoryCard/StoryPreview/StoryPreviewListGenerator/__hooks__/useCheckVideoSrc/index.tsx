import { useSystem } from '../../../../../../../../hooks/useSystem';

const useCheckVideoSrc = () => {
  const { operatingSystem } = useSystem();

  const checkFormatVideo = (src: string) => {
    if (operatingSystem === 'ios') {
      const splitSrc = src.split('.');
      const srcIncludedWebm = splitSrc.includes('webm');
      if (srcIncludedWebm) {
        src = src.replaceAll('.webm', '.mp4');
      }
    }

    return src;
  };

  return { checkFormatVideo };
};

export default useCheckVideoSrc;
