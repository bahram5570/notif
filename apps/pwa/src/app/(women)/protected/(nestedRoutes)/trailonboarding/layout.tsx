import TrailonboardingProvider from '@providers/TrailonboardingProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TrailonboardingProvider>
        <>{children}</>
      </TrailonboardingProvider>
    </>
  );
};

export default Layout;
