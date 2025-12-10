import AiChatHistoryManagerProvider from '@providers/__aiChatbot__/AiChatHistoryManagerProvider';
import AiFileManagerProvider from '@providers/__aiChatbot__/AiFileManagerProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AiChatHistoryManagerProvider>
        <AiFileManagerProvider>
          <>{children}</>
        </AiFileManagerProvider>
      </AiChatHistoryManagerProvider>
    </>
  );
};

export default Layout;
