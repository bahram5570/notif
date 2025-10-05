import AddToHomeScreenProvider from '@providers/AddToHomeScreenProvider';
import PaymentProvider from '@providers/PaymentProvider';
import PermissionsProvider from '@providers/PermissionsProvider';
import ProfileProvider from '@providers/ProfileProvider';
import RetentionEventProvider from '@providers/RetentionEventProvider';
import SignDateStateProvider from '@providers/SignDateStateProvider';
import SplashProvider from '@providers/SplashProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <AddToHomeScreenProvider>
      <PaymentProvider />
      <PermissionsProvider />
      <RetentionEventProvider />

      <SplashProvider>
        <ProfileProvider>
          <SignDateStateProvider>
            <>{children}</>
          </SignDateStateProvider>
        </ProfileProvider>
      </SplashProvider>
    </AddToHomeScreenProvider>
  );
};

export default Layout;
