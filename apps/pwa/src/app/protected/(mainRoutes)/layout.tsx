'use server';

import { MainFooter } from '@repo/core/components/MainFooter';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <>{children}</>
      <MainFooter />
    </div>
  );
};

export default Layout;
