'use client';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

import { FeaturesIntruductionCardGeneratorTypes } from './types';

const FeaturesIntruductionCardGenerator = ({
  description,
  isInverse,
  image,
  title,
  imageDark,
}: FeaturesIntruductionCardGeneratorTypes) => {
  const { breakPoint } = useBreakPoint();

  const order = breakPoint.tablet ? 1 : isInverse ? 2 : 1;

  return (
    <div
      className={`
                  w-full 
                  max-w-[360px] 
                  md:max-w-full 
                  2xl:max-w-[1400px] 
                  h-[380px] 
                  md:h-[400px] 
                  lg:h-[480px] 
                  grid 
                  grid-cols-1 
                  md:grid-cols-12 
                  rounded-3xl 
                  overflow-hidden
                  ${breakPoint.tablet ? 'bg-impo_Surface_SurfaceVariant' : 'bg-impo_Transparent'}
                `}
    >
      <div className="relative w-full h-[230px] md:h-full max-w-[720px] md:col-span-7 mx-auto" style={{ order }}>
        <CustomImage
          src={imageDark}
          alt={title}
          fill={true}
          className="w-full h-auto object-cover pointer-events-none !hidden dark:!block"
        />
        <CustomImage
          src={image}
          alt={title}
          fill={true}
          className="w-full h-auto object-cover pointer-events-none dark:!hidden !block"
        />
      </div>

      <div className="w-full md:max-w-[500px] px-4 py-6 md:col-span-5 flex flex-col justify-center gap-1 mx-auto order-1">
        <CustomTypography
          tagType="h3"
          className="!text-impo_Neutral_OnSurface"
          fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Large'}
        >
          {title}
        </CustomTypography>

        <CustomTypography
          className="!text-impo_Surface_OnSurfaceVariant"
          fontSize={breakPoint.tablet ? 'Body_Medium' : 'Body_Large'}
        >
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default FeaturesIntruductionCardGenerator;
