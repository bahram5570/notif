import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { NotDataPropsType } from './type';

const NotData = ({ partName }: NotDataPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'memory', showProgressBar: true, linkTo: '/protected/createMemory' });
  };

  return (
    <div className="p-3 flex flex-col gap-4">
      <CustomImage src="/assets/images/memory.webp" style={{ paddingTop: HEADER_HEIGHT }} />
      <div className="flex flex-col p-3 items-center gap-1">
        <CustomTypography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground text-center ">
          خاطره بازی روزهای زیبا
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-center p-2">
          {`روزهای خوب، فقط خاطره‌های قشنگشه که میمونه😍 میتونی اینجا خاطرات قشنگت رو با ${partName} به اشتراک بذاری و هر دو از دیدنش لذت ببرین💕`}
        </CustomTypography>
      </div>
      <div onClick={onClick} className="mt-auto mb-4">
        <div className="flex flex-row items-center gap-1 justify-center ">
          <div className="px-6 py-3 flex justify-end items-center rounded-full bg-impo_PrimaryMan_PrimaryMan ">
            <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
              خاطره بازی رو شروع کن
            </CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotData;
