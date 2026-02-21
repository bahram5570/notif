'use client';

import { useEffect, useState } from 'react';

import Logo from '@assets/icons/impo2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import useDownloadLinks from '@hooks/useDownloadLinks';
import { useRouter } from 'next/navigation';

import { HelpData, getBrowser } from './constants';
import { BrowserType } from './types';

const AutoDownloadPage = () => {
  const [browser, setBrowser] = useState<BrowserType>('other');
  const router = useRouter();
  const { womanDirectApplcationalink } = useDownloadLinks();

  useEffect(() => {
    router.push(womanDirectApplcationalink);
    setBrowser(getBrowser());
  }, []);

  return (
    <div className="w-full max-w-[500px] py-6">
      <div className="grid justify-center justify-items-center gap-y-4">
        <Logo className="w-20 h-20" />
        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          در حال دانلود اپلیکیشن ایمپو
          <span className="inline-flex gap-1">
            <span className="animate-bounce [animation-delay:0ms]">.</span>
            <span className="animate-bounce [animation-delay:150ms]">.</span>
            <span className="animate-bounce [animation-delay:300ms]">.</span>
          </span>
        </CustomTypography>
        <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
          برای کامل شدن نصب مراحل زیر را طی کنید
        </CustomTypography>
      </div>
      <div className="!bg-impo_Neutral_Surface py-[19px] px-2 rounded-2xl mt-6 mx-2 grid grid-cols-2 gap-4">
        {HelpData[browser].map((item, i) => {
          const isLastSingle = HelpData[browser].length === 3 && i === 2;

          return (
            <div key={i} className={`grid gap-y-[14px] justify-items-center ${isLastSingle ? 'col-span-2' : ''}`}>
              <CustomImage
                alt="help"
                src={item.img}
                width={9999}
                height={9999}
                className="w-full h-full max-w-[16rem]"
              />
              <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground text-center">
                {item.title}
              </CustomTypography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AutoDownloadPage;
