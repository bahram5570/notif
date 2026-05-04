import { ShareExperienceOverlayIndexProvider } from '@repo/core/providers/OverlayIndexProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <ShareExperienceOverlayIndexProvider>{children}</ShareExperienceOverlayIndexProvider>;
};

export default Layout;
