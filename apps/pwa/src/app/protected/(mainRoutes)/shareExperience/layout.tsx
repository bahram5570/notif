import { ShareExperienceProvider } from '@repo/core/providers/ShareExperienceProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <ShareExperienceProvider>{children}</ShareExperienceProvider>;
};

export default Layout;
