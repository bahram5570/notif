import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';
import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import useGetPartnerName from './__hooks__/useGetPartnerName';

const NotData = () => {
  const { partnerName } = useGetPartnerName();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'memory', showProgressBar: true, linkTo: '/protected/createMemory' });
  };

  return (
    <div className="p-3 flex flex-col gap-4 min-h-screen" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
      <CustomImage src="/assets/images/memory.webp" />
      <div className="flex flex-col p-3 items-center gap-1">
        <Dark_Typography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground text-center ">
          خاطره بازی روزهای زیبا
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-center p-2">
          {`روزهای خوب، فقط خاطره‌های قشنگشه که میمونه😍 میتونی اینجا خاطرات قشنگت رو با ${partnerName?.name} به اشتراک بذاری و هر دو از دیدنش لذت ببرین💕`}
        </Dark_Typography>
      </div>
      <div onClick={onClick} className="mt-auto mb-4">
        <div className="flex flex-row items-center gap-1 justify-center ">
          <div className="px-6 py-3 flex justify-end items-center rounded-full  bg-impo_Primary_Primary">
            <Dark_Typography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
              خاطره بازی رو شروع کن
            </Dark_Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotData;
