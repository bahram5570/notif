'use client';

import Copy from '@assets/images/womanDay/Copy.svg';
import mother from '@assets/images/womanDay/mother.webp';
import partner from '@assets/images/womanDay/partner.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { COLORS_LIST } from '@theme/colors';

import useCopy from '../Hooks/useCopy';
import useGetData from '../Hooks/useGetData';

const ResultWomanDayPage = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const gift = getQueryParams('gift');
  const { copylink } = useCopy({ toastMessage: 'لینک کپی شد' });
  const { giftData } = useGetData({ giftUrl: gift || '' });

  const userName = giftData?.selfName + ' عزیز ' || '';

  const link = gift ? `https://impo.app/landing/womanday/gift?giftUrl=${gift}` : '';

  return (
    <div className="w-full max-w-[500px]">
      <CustomImage src={giftData?.type === 0 ? mother : partner} alt="partner&mother" />
      <div className="px-4">
        <CustomTypography fontSize="Headline_Medium" tagType="p" className="text-center">
          {userName}
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" tagType="p" className="text-center mt-2">
          کارت هدیه پارتنرت آماده شده. از طریق لینک زیر میتونی اونو کپی کنی و برای پارتنرت بفرستی.
        </CustomTypography>
        <CustomLink
          href={link}
          className="mt-9 block w-full rounded-xl py-[13.5px] !text-white text-center "
          style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
        >
          <CustomTypography fontSize="Lable_Large" tagType="p" color={'White'}>
            مشاهده کارت هدیه
          </CustomTypography>
        </CustomLink>
        <div
          className="!mt-4 rounded-xl border w-fit justify-self-center flex gap-x-6 items-center py-3 px-[14px] cursor-pointer"
          style={{ borderColor: COLORS_LIST.Neutral_Surface }}
          onClick={() => copylink(link)}
        >
          <CustomTypography fontSize="Body_Large" tagType="p" color={'Surface_Outline'}>
            کپی لینک
          </CustomTypography>
          <Copy />
        </div>
      </div>
    </div>
  );
};

export default ResultWomanDayPage;
