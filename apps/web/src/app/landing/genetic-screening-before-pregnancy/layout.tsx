import ContentLayout from './ContentLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentLayout>
      <div className="w-full max-w-[500px] relative">
        <>{children}</>
      </div>
    </ContentLayout>
  );
};

export default Layout;