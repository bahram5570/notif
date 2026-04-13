import { FIREBASE_CONFIG, FIREBASE_VAPID_KEY } from '@constants/app.constants';
import { NEED_DATE_PATH_LIST, NEED_TOAST_PATH_LIST } from '@constants/routes.constants';
import AddToHomeScreenProvider from '@providers/AddToHomeScreenProvider';
import ProfileProvider from '@providers/ProfileProvider';
import SplashProvider from '@providers/SplashProvider';
import { PermissionsProvider } from '@repo/core/providers/PermissionsProvider';
import { SignDateStateProvider } from '@repo/core/providers/SignDateStateProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AddToHomeScreenProvider>
      <PermissionsProvider firebaseConfigs={FIREBASE_CONFIG} vapidKey={FIREBASE_VAPID_KEY} />

      <SplashProvider>
        <ProfileProvider>
          <SignDateStateProvider dateRoutes={NEED_DATE_PATH_LIST} toastRoutes={NEED_TOAST_PATH_LIST}>
            <>{children}</>
          </SignDateStateProvider>
        </ProfileProvider>
      </SplashProvider>
    </AddToHomeScreenProvider>
  );
};

export default Layout;
