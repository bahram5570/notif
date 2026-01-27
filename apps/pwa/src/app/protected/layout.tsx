import AddToHomeScreenProvider from '@providers/AddToHomeScreenProvider';
import PaymentProvider from '@providers/PaymentProvider';
import PermissionsProvider from '@providers/PermissionsProvider';
import ProfileProvider from '@providers/ProfileProvider';
import RetentionEventProvider from '@providers/RetentionEventProvider';
// import SentryProvider from '@providers/SentryProvider';
import SplashProvider from '@providers/SplashProvider';
import SignDateStateProvider from '@providers/__sign__/SignDateStateProvider';
import SignInteractiveBannerProvider from '@providers/__sign__/SignInteractiveBannerProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AddToHomeScreenProvider>
      {/* <SentryProvider /> */}
      <PaymentProvider />
      <PermissionsProvider />
      <RetentionEventProvider />

      <SplashProvider>
        <ProfileProvider>
          <SignDateStateProvider>
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
