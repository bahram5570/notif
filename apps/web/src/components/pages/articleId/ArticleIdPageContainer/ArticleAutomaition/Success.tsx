'use client';

import pdfIcon from '@assets/images/pdfIcon.webp';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { SuccessProps } from './types';

export default function Success({ onClose, link, pdfId }: SuccessProps) {
  const handleDownload = () => {
    const linkElement: any = document.createElement('a');
    linkElement.href = link;
    linkElement.target = '_blank';
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
    onClose();
  };

  return (
    <div className="text-center">
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground mb-3 text-center">
        کاربر عزیز، فایل pdf شما آماده‌س و میتونی از طریق لینک زیر دانلودش کنی!
      </CustomTypography>
      <div className="flex justify-center">
        <CustomImage alt="pdf" src={pdfIcon} className="w-[65px] h-[75px]" />
      </div>
      <CustomButton
        onClick={handleDownload}
        fontSize="Body_Large"
        id={pdfId}
        className="!bg-impo_Black w-full border-none mt-[59px] py-[13.5px]"
      >
        دانلود فایل pdf
      </CustomButton>
    </div>
  );
}
