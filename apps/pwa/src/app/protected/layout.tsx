import { NEED_DATE_PATH_LIST, NEED_TOAST_PATH_LIST } from '@constants/routes.constants';
import AddToHomeScreenProvider from '@providers/AddToHomeScreenProvider';
import PaymentProvider from '@providers/PaymentProvider';
import PermissionsProvider from '@providers/PermissionsProvider';
import ProfileProvider from '@providers/ProfileProvider';
import RetentionEventProvider from '@providers/RetentionEventProvider';
// import SentryProvider from '@providers/SentryProvider';
import SplashProvider from '@providers/SplashProvider';
import SignInteractiveBannerProvider from '@providers/__sign__/SignInteractiveBannerProvider';
import { SignDateStateProvider } from '@repo/core/providers/SignDateStateProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AddToHomeScreenProvider>
      {/* <SentryProvider /> */}
      <PaymentProvider />
      <PermissionsProvider />
      <RetentionEventProvider />

      <SplashProvider>
        <ProfileProvider>
          <SignDateStateProvider dateRoutes={NEED_DATE_PATH_LIST} toastRoutes={NEED_TOAST_PATH_LIST}>
            <SignInteractiveBannerProvider>
              <>{children}</>
            </SignInteractiveBannerProvider>
          </SignDateStateProvider>
        </ProfileProvider>
      </SplashProvider>
    </AddToHomeScreenProvider>
  );
};

export default Layout;
