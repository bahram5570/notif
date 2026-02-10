import OverlayIndexProvider from '@providers/__shareExperience__/OverlayIndexProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <OverlayIndexProvider>{children}</OverlayIndexProvider>;
};

export default Layout;
