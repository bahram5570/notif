'use client';

import { useEffect, useState } from 'react';

import StarIcon from '@assets/icons/Stars.svg';
import { ctaBannerService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';
import { CraBannerItemTypes } from '@components/CtaBanner/types';
import CustomTypography from '@components/ui/CustomTypography';

import Book from './Book';

const Depression = () => {
  const [banner, setBanner] = useState<CraBannerItemTypes | undefined>();

  const getCtaBanner = async () => {
    const { ctaData } = await ctaBannerService('janpanah3');
    setBanner(ctaData);
  };

  useEffect(() => {
    getCtaBanner();
  }, []);

  return (
    <>
      {' '}
      <div
        className="p-4 flex flex-col gap-2 rounded-2xl border-impo_Surface_OutlineVariant"
        style={{ border: `1px solid ` }}
      >
        <CustomTypography fontSize="Lable_Large" className="p-4 !text-impo_Neutral_OnBackground text-center">
          غم به دلت راه نده
        </CustomTypography>
        <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
          <div className="flex justify-start items-center gap-2">
            <StarIcon />
            {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
          </div>

          <CustomTypography fontSize="Body_Medium" className="text-justify ">
            افسردگی ناشی از جنگ، یک وضعیت روانی عمیق و فرساینده‌ست که در اثر تجربه‌ی مستقیم یا غیرمستقیمِ ترس، مرگ،
            آوارگی یا فشارهای بلندمدت ناشی از جنگ به‌وجود میاد.
          </CustomTypography>
        </div>

        <Book />
      </div>
      {banner && <CtaBanner {...banner} />}
    </>
  );
};

export default Depression;
