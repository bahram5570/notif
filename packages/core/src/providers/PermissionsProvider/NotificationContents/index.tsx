import { HEADER_ELEMENT_SIZE } from '../../../components/MainPageLayout/constants';
import { CustomButton } from '../../../components/ui/CustomButton';
import { CustomImage_NEW } from '../../../components/ui/CustomImage_NEW';
import { CustomTypography } from '../../../components/ui/CustomTypography';
import CrossIcon from '@assets/shared/icons/cross.svg';

import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import { useSystem } from '../../../hooks/useSystem';
import { NotificationContentsTypes } from './types';

const NotificationContents = (props: NotificationContentsTypes) => {
  const { appName } = useSystem();

  return (
    <div
      style={{ paddingTop: HEADER_HEIGHT + 20 }}
      className="w-full h-[100dvh] flex flex-col px-4 bg-impo_Neutral_Background"
    >
      <div
        style={{ maxWidth: MAX_SCREEN_WIDTH, height: HEADER_HEIGHT }}
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-end px-4 mx-auto"
      >
        <div
          onClick={() => props.acceptHandler(false)}
          style={{ height: HEADER_ELEMENT_SIZE, width: HEADER_ELEMENT_SIZE }}
          className="flex items-center justify-center rounded-full p-1 bg-impo_Neutral_Surface"
        >
          <CrossIcon className="w-full h-auto fill-impo_Neutral_OnBackground" />
        </div>
      </div>

      <div className="relative w-full aspect-[1/1.06]">
        <CustomImage_NEW
          fill={true}
          hasImageLoading={false}
          className="object-cover"
          src="/assets/shared/images/notification-permission-heading.webp"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-1 pt-5">
        <CustomTypography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground">
          اطلاع‌رسانی تاریخ های چرخه
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_InverseSurface text-center">
          اگه می‌خوای تاریخ‌های مهم چرخه مثل روز PMS، پریود و بارداری رو بهت یادآوری کنیم، دسترسی دریافت یادآور رو به
          ایمپو بده
        </CustomTypography>
      </div>

      <div className="w-full pt-1 pb-8 mt-auto">
        <CustomButton
          onClick={() => props.acceptHandler(true)}
          className={`
                      !h-12 
                      ${
                        appName === 'MEN_PWA'
                          ? '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'
                          : '!bg-impo_Primary_Primary !border-impo_Primary_Primary'
                      }
                    `}
        >
          دسترسی یادآور
        </CustomButton>
      </div>
    </div>
  );
};

export default NotificationContents;
