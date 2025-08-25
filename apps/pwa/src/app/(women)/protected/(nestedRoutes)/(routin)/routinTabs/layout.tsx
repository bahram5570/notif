import RoutinTabsProvider from '@providers/__routinTabs__/RoutinTabsProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RoutinTabsProvider>
        <>{children}</>
      </RoutinTabsProvider>
    </>
  );
};

export default Layout;
