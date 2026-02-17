// import { fetchActivationData } from '@services/activationServices';
import ActivationProvider from '@providers/__activation__/ActivationProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  // const { questionsData, errorCode } = await fetchActivationData('ManAccount/activationQuestion');

  return (
    <>
      <ActivationProvider questionsData={{ question: [], reward: [] }} errorCode={null}>
        <>{children}</>
      </ActivationProvider>
    </>
  );
};

export default Layout;
