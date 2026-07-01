import { NEED_DATE_PATH_LIST, NEED_TOAST_PATH_LIST } from '@constants/routes.constants';
import PaymentProvider from '@providers/PaymentProvider';
import ProfileProvider from '@providers/ProfileProvider';
import PwaPermissionsProvider from '@providers/PwaPermissionsProvider';
import RetentionEventProvider from '@providers/RetentionEventProvider';
// import SentryProvider from '@providers/SentryProvider';
import SplashProvider from '@providers/SplashProvider';
import SignInteractiveBannerProvider from '@providers/__sign__/SignInteractiveBannerProvider';
import { SignDateStateProvider } from '@repo/core/providers/SignDateStateProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <SentryProvider /> */}
      <PwaPermissionsProvider>
        <PaymentProvider />
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
      </PwaPermissionsProvider>
    </>
  );
};

export default Layout;
