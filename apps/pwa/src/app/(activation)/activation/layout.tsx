import { fetchActivationData } from '@services/activationServices';

import AddToHomeScreenProvider from '@providers/AddToHomeScreenProvider';
import ActivationProvider from '@providers/__activation__/ActivationProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { questionsData, errorCode } = await fetchActivationData('woman/account/questions');

  return (
    <>
      <AddToHomeScreenProvider>
        <ActivationProvider questionsData={questionsData} errorCode={errorCode}>
          <>{children}</>
        </ActivationProvider>
      </AddToHomeScreenProvider>
    </>
  );
};

export default Layout;
