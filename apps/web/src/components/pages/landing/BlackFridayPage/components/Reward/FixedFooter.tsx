import { FC } from 'react';

import * as htmlToImage from 'html-to-image';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

type Props = {
  cardRef: React.RefObject<HTMLDivElement>;
};

const FixedFooter: FC<Props> = ({ cardRef }) => {
  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const wrapper = document.createElement('div');
      wrapper.style.width = '1920px';
      wrapper.style.height = '1080px';
      wrapper.style.backgroundColor = '#fff';
      wrapper.style.display = 'flex';
      wrapper.style.justifyContent = 'center';
      wrapper.style.alignItems = 'center';

      const clonedCard = cardRef.current.cloneNode(true) as HTMLElement;
      wrapper.appendChild(clonedCard);

      document.body.appendChild(wrapper);

      const dataUrl = await htmlToImage.toPng(wrapper, {
        cacheBust: true,
        quality: 1,
        backgroundColor: '#fff',
      });

      document.body.removeChild(wrapper);

      const link = document.createElement('a');
      link.download = 'impo.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error generating image', err);
    }
  };

  return (
    <div className="mt-9 text-center">
      <CustomTypography className="text-center" tagType="p" fontSize="Body_Medium">
        کارتت رو استوری کن و دوستات رو به شرکت در کمپین دعوت کن و ده درصد تخفیف بیشتر بگیر
      </CustomTypography>

      <div className="flex justify-center mt-4">
        <CustomButton varient="fill" className="w-[216px] !h-12" fontSize="Title_Small" onClick={handleDownload}>
          دانلود عکس
        </CustomButton>
      </div>
    </div>
  );
};

export default FixedFooter;
