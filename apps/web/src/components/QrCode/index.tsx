'use client';

import { useEffect, useRef } from 'react';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { QrCodePropsType } from './type';

const QrCode = ({ className }: QrCodePropsType) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (boxRef.current) {
        boxRef.current.classList.remove('-right-3');
        boxRef.current.classList.add('-right-52');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={boxRef}
      className={`
                  hidden 
                  lg:block 
                  lg:fixed 
                  z-20 
                  rounded-t-2xl 
                  rounded-e-2xl 
                  -right-3 
                  hover:-right-3
                  lg:top-[595px] 
                  xl:top-[645px] 
                  bg-impo_Grey_50
                  duration-500
                  ${className}
                `}
    >
      <div className="flex flex-row justify-center items-center gap-4 py-4 pr-8 pl-5">
        <div className="flex flex-col justify-center items-start h-full gap-3">
          <CustomTypography fontSize="Title_Small" className="!text-impo_Pink_500">
            برای دانلود ایمپو
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="!text-impo_Black">
            از اینجا اسکن کن
          </CustomTypography>
        </div>
        <CustomImage src="/assets/images/508100930fe0130bec03d5f1445fc607 1.webp" alt="qrcode" width={80} height={80} />
      </div>
    </div>
  );
};

export default QrCode;
