import logo from '@assets/images/geneticMarketing/logo.webp';

import CustomImage from '@components/ui/CustomImage';

import GoBack from './GoBack';
import { GeneticMarketingLayoutProps } from './types';

const GeneticMarketingLayout = ({ children, goBack = true }: GeneticMarketingLayoutProps) => {
  return (
    <div
      className="w-full  
                  px-4 
                  sm:px-6 
                  py-5 
                  bg-[url(/assets/images/geneticMarketing/coverHollow.webp)] 
                  bg-contain
                  bg-no-repeat 
                  bg-[center_-40px]
                  h-[100dvh]"
    >
      <div className="mt-2 grid place-items-center">
        {goBack && <GoBack />}
        <CustomImage src={logo} alt="logo" width={999} height={999} className="w-[104px] mt-4 mb-4" />
        <>{children}</>
      </div>
    </div>
  );
};

export default GeneticMarketingLayout;
