import CurrentRoutinIndexProvider from '@providers/__routin__/CurrentRoutinIndexProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CurrentRoutinIndexProvider>
        <>{children}</>
      </CurrentRoutinIndexProvider>
    </>
  );
};

export default Layout;
