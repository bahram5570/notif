import PaymentProvider from '@providers/PaymentProvider';
import PermissionsProvider from '@providers/PermissionsProvider';
import ProfileProvider from '@providers/ProfileProvider';
import SignDateStateProvider from '@providers/SignDateStateProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PaymentProvider />
      <PermissionsProvider />

      <ProfileProvider>
        <SignDateStateProvider>
          <>{children}</>
        </SignDateStateProvider>
      </ProfileProvider>
    </>
  );
};

export default Layout;
