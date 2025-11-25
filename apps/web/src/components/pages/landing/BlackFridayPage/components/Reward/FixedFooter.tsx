import { FC } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
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
      <CustomTypography className="text-center" tagType="p" fontSize="Body_Medium">
        حالا که قدر خودتو می‌دونی و خودمراقبتی، یکی از اصول زندگیته، می‌تونی سفیر خودمراقبتی ایمپو باشی و بقیه رو هم با
        خودت همراه کنی. فقط کافیه کارت شخصیتت رو دانلود و با تگ کردن لینک کمپین، اون رو استوری کنی. هدیه این همراهیت پیش
        ما محفوظه.یادت نره پیچ ایمپو رو منشن کنی تا هدیه‌ات رو برات بفرستیم.
      </CustomTypography>

      <div className="flex justify-center mt-4">
        <CustomButton
          varient="fill"
          className="w-[216px] !h-12"
          fontSize="Title_Small"
          id={event}
          onClick={() => downloadImage(storyImage)}
        >
          {isLoading ? <Spinner color={'White'} size={18} /> : 'دانلود عکس'}
        </CustomButton>
      </div>
    </div>
  );
};

export default FixedFooter;
