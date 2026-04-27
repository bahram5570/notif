import { OverlayIndexProvider } from '@repo/core/providers/OverlayIndexProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <OverlayIndexProvider>{children}</OverlayIndexProvider>;
};

export default Layout;
