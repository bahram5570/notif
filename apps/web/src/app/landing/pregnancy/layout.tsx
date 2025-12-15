import HeaderFooterContainer from '@components/HeaderFooterContainer';
import LandingPregnancyLayout from '@components/pages/landing/pregnancy/LandingPregnancyLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderFooterContainer>
      {/* <div className="w-full max-w-[640px] relative pt-[100px] md:pt-[150px] pb-12 landing_container"> */}
      <div className=" relative pt-[100px] md:pt-[150px] pb-12 landing_container">
        <>{children}</>
        <LandingPregnancyLayout />
      </div>
    </HeaderFooterContainer>
  );
};

export default Layout;
