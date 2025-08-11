import PartnerProvider from '@providers/PartnerProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <PartnerProvider>
      <>{children}</>
    </PartnerProvider>
  );
};

export default Layout;
