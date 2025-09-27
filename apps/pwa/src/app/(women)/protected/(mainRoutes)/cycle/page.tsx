import CyclePage from '@components/women/pages/mainRoutes/cycle/CyclePage';
import SplashProvider from '@providers/SplashProvider';

const Cycle = () => {
  return (
    <SplashProvider>
      <CyclePage />
    </SplashProvider>
  );
};

export default Cycle;
