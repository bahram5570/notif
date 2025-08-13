import FeatureIntroProvider from '@providers/__featureIntro__/FeatureIntroProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FeatureIntroProvider>
        <>{children}</>
      </FeatureIntroProvider>
    </>
  );
};

export default Layout;
