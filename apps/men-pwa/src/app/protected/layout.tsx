import { FIREBASE_CONFIG, FIREBASE_VAPID_KEY } from '@constants/app.constants';
import AddToHomeScreenProvider from '@providers/AddToHomeScreenProvider';
import SplashProvider from '@providers/SplashProvider';
import { PermissionsProvider } from '@repo/core/providers/PermissionsProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AddToHomeScreenProvider>
      <PermissionsProvider firebaseConfigs={FIREBASE_CONFIG} vapidKey={FIREBASE_VAPID_KEY} />

      <SplashProvider>
        <>{children}</>
      </SplashProvider>
    </AddToHomeScreenProvider>
  );
};

export default Layout;
