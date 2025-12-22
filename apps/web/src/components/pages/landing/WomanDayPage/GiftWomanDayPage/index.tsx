'use client';

import Copy from '@assets/images/womanDay/Copy.svg';
import mother from '@assets/images/womanDay/mother.webp';
import partner from '@assets/images/womanDay/partner.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useCopy from '../Hooks/useCopy';
import useGetData from '../Hooks/useGetData';

const GiftWomanDayPage = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const gift = getQueryParams('giftUrl');
  const { copylink } = useCopy({ toastMessage: 'کد تخفیف کپی شد' });
  const { giftData, isLoading } = useGetData({ giftUrl: gift || '' });

  const userName = `${giftData?.type === 0 ? ' مامان ' : ''}` + giftData?.partnerName + ' عزیزم ' || '';

  return (
    <div className="w-full max-w-[500px]">
      {isLoading && (
        <div className="w-full h-[600px] rounded-md animate-pulse flex justify-self-center mb-7 bg-impo_Neutral_Surface" />
      )}
      {giftData?.type === 0 && <CustomImage src={mother} alt="mother" />}
      {giftData?.type === 1 && <CustomImage src={partner} alt="partner" />}

      <div className="px-4 pb-6">
        {isLoading && (
          <div className="w-[200px] h-[40px] rounded-md animate-pulse flex justify-self-center mb-4 bg-impo_Neutral_Surface" />
        )}

        {!isLoading && giftData?.selfName && (
          <CustomTypography fontSize="Headline_Medium" tagType="p" className="text-center">
            {userName}
          </CustomTypography>
        )}

        {giftData?.type === 0 && (
          <CustomTypography fontSize="Body_Large" tagType="p" className="text-center mt-2">
            روزت مبارک قشنگِ مهربونِ من همیشه تو مراقب من بودی این بار من می‌خوام مراقبت باشم این
            <strong>کد تخفیف 100%</strong> رو تو <strong>اپلیکیشن ایمپو</strong> بزن و بیشتر مراقب خودت باش
          </CustomTypography>
        )}

        {giftData?.type === 1 && (
          <CustomTypography fontSize="Body_Large" tagType="p" className="text-center mt-2">
            روزت مبارک دلبرِ نازنینِ من هر چی فکر کردم هدیه‌ای بهتر از "مراقبت" برات پیدا نکردم چون دوست دارم که مراقب
            خودت باشی این<strong>کد تخفیف 100%</strong> رو تو <strong>اپلیکیشن ایمپو</strong> بزن و بیشتر مراقب خودت باش
          </CustomTypography>
        )}

        {isLoading && (
          <div className="w-[150px] h-[50px] rounded-md animate-pulse flex justify-self-center mb-4 !mt-4 bg-impo_Neutral_Surface" />
        )}

        {!isLoading && giftData?.code && (
          <div className="flex justify-center w-full">
            <div
              className="!mt-4 rounded-xl border w-fit justify-self-center flex gap-x-6 items-center py-3 px-[14px] cursor-pointer border-impo_Neutral_Surface"
              onClick={() => copylink(giftData?.code || '')}
            >
              <CustomTypography fontSize="Body_Large" tagType="p" className="!text-impo_Neutral_OnBackground">
                {' کد تخفیف: ' + giftData?.code}
              </CustomTypography>
              <Copy />
            </div>
          </div>
        )}
        {giftData?.type === 0 && (
          <CustomTypography fontSize="Body_Large" tagType="p" className="text-center mt-6">
            یادت نره تو خیلی برام مهمی مامان نازنینم💕
          </CustomTypography>
        )}
        {giftData?.type === 1 && (
          <CustomTypography fontSize="Body_Large" tagType="p" className="text-center mt-6">
            یادت نره تو خیلی برام مهمی قشنگِ من💕
          </CustomTypography>
        )}

        {isLoading && (
          <div className="w-[100px] h-[40px] rounded-md animate-pulse flex justify-self-center mb-4 bg-impo_Neutral_Surface" />
        )}
        {!isLoading && giftData?.selfName && (
          <CustomTypography fontSize="Lable_Large" tagType="p" className="text-center mt-1">
            {' از طرف ' + giftData?.selfName}
          </CustomTypography>
        )}

        <CustomLink
          href={'https://weareimpo.ir/referal?type=10'}
          className="mt-9 block w-full rounded-xl py-[13.5px] text-center bg-impo_Primary_Primary"
        >
          <CustomTypography fontSize="Lable_Large" tagType="p" className="!text-impo_White">
            استفاده از کد تخفیف
          </CustomTypography>
        </CustomLink>
      </div>
    </div>
  );
};

export default GiftWomanDayPage;
