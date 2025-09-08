import useAnalytics from '@hooks/useAnalytics';

const useActivationAnalytics = () => {
  const { callEvent } = useAnalytics();

  const callEventActivation = (description?: string) => {
    const pathList = location.pathname.split('/');
    const event = `${pathList[1]} ${pathList[2]} ${description || ''}`;
    callEvent(event.trim());
  };

  return { callEventActivation };
};

export default useActivationAnalytics;
