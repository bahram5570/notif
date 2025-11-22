import { FC } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import useDownloadImage from '../../Hooks/useDownloadImage';

type Props = {
  cardRef: React.RefObject<HTMLDivElement>;
};

const FixedFooter: FC<Props> = ({ cardRef }) => {
  const { downloadImage } = useDownloadImage();

  const exportImgHandler = () => {
    if (!cardRef.current) return;

    downloadImage({
      element: cardRef.current,
      filename: 'output.jpeg',
      height: 1920,
    });
  };

  return (
    <div className="mt-9 text-center">
      <CustomTypography className="text-center" tagType="p" fontSize="Body_Medium">
        کارتت رو استوری کن و دوستات رو به شرکت در کمپین دعوت کن و ده درصد تخفیف بیشتر بگیر
      </CustomTypography>

      <div className="flex justify-center mt-4">
        <CustomButton varient="fill" className="w-[216px] !h-12" fontSize="Title_Small" onClick={exportImgHandler}>
          دانلود عکس
        </CustomButton>
      </div>
    </div>
  );
};

export default FixedFooter;
