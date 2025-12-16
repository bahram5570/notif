import HeaderFooterContainer from '@components/HeaderFooterContainer';

import ContentLayout from './ContentLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderFooterContainer>
      <ContentLayout>
        <div className="w-full   relative pt-[55px] md:pt-[150px] pb-12">
          <>{children}</>
        </div>
      </ContentLayout>
    </HeaderFooterContainer>
  );
};

export default Layout;
