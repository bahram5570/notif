'use client';

import LogoIcon from '@assets/icons/impo2.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';

import TestOnlineWrapper from '../TestOnlineWrapper';
import useTestOnlineResult from './__hooks__/useTestOnlineResult';

const TestOnlineResultContainer = () => {
  const { data } = useTestOnlineResult();

  return (
    <TestOnlineWrapper>
      <LogoIcon className="w-20 h-20 mt-6" />

      {data && (
        <div className="relative w-full">
          <CustomTypography
            fontSize="Lable_Large"
            tagType="h1"
            className="pt-10 pb-2 text-center !text-impo_Neutral_OnBackground"
          >
            {data.title}
          </CustomTypography>

          <CustomTypography className="!text-center pt-2 pb-6 !text-impo_Neutral_OnBackground">
            {data.message}
          </CustomTypography>

          <CustomImage
            alt=""
            height={0}
            width={490}
            className="mx-auto px-1"
            src="/assets/images/pregnancyTestOnline.webp"
          />

          <CustomLink
            id="install_tool"
            href={`${PWA_LINK_WOMEN_URL}/?utm_source=website&utm_medium=cta&utm_campaign=cta-click`}
            className="w-full h-12 sm:h-14 flex justify-center items-center rounded-full bg-impo_Primary_Primary"
          >
            <CustomTypography fontSize="Lable_Large" className="!text-impo_White">
              دانلود اپلیکیشن ایمپو
            </CustomTypography>
          </CustomLink>
        </div>
      )}
    </TestOnlineWrapper>
  );
};

export default TestOnlineResultContainer;
