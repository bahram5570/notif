'use client';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { ImpoServiceData } from './constants';

const ServicesItem = () => {
  return (
    <div
      className="grid md:grid-flow-col auto-cols-fr grid-cols-3 lg:gap-x-[50px] xl:gap-x-[50px] md:gap-x-[28px] gap-y-6  gap-x-[27px] mt-8 rounded-[24px] p-6 md:py-[25px] md:*:px-[37px]    shadow-[0_4px_15px_rgba(58,112,191,0.10)]
  dark:[box-shadow:none!important] dark:border-2 dark:!border-impo_Surface_SurfaceVariant dark:bg-impo_Neutral_Surface"
    >
      {ImpoServiceData.map((item, index) => (
        <CustomLink href={item.url} key={index} className="!p-0" id={item.id}>
          <div className="grid gap-y-3 justify-self-center justify-items-center">
            <CustomImage
              width={1000}
              height={0}
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover"
              alt={item.title}
              src={item.image}
            />
            <CustomTypography fontSize="Body_Medium" className="text-center !text-impo_Neutral_OnBackground">
              {item.title}
            </CustomTypography>
          </div>
        </CustomLink>
      ))}
    </div>
  );
};
export default ServicesItem;
