import AiFileManagerProvider from '@providers/__aiChatbot__/AiFileManagerProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AiFileManagerProvider>
        <>{children}</>
      </AiFileManagerProvider>
    </>
  );
};

export default Layout;
