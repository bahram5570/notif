import { FC } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomButton from '@components/ui/CustomButton';
import Spinner from '@components/ui/Spinner';

import useDownloadImage from '../../Hooks/useDownloadImage';

type Props = {
  event: string;
  storyImage: string;
};

const FixedFooter: FC<Props> = ({ storyImage, event }) => {
  const { downloadImage, isLoading } = useDownloadImage({
    filename: 'story-impo.png',
  });

  return (
    <div className="mt-10 text-center pb-10">
      <CustomTypography className="text-center mb-2 !text-impo_Primary_Primary" tagType="p" fontSize="Title_Small">
        هدیه بیشتر میخوای؟
      </CustomTypography>
      <CustomTypography className="text-center" tagType="p" fontSize="Body_Medium">
        کارتت رو دانلود کن، استوریش کن و پیج ایمپو رو منشن کن . اینجوری سفیر خود مراقبتی هستی و هدیه ات هم پیش ما
        محفوظه.{' '}
      </CustomTypography>

      <div className="flex justify-center mt-4">
        <CustomButton
          className="w-[216px] !h-12"
          fontSize="Title_Small"
          id={event}
          onClick={() => downloadImage(storyImage)}
        >
          {isLoading ? <Spinner className="!border-impo_White" size={18} /> : 'دانلود عکس'}
        </CustomButton>
      </div>
    </div>
  );
};

export default FixedFooter;
