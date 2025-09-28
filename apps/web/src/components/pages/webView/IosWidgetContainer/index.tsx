import IosIcon from '@assets/images/webView/widgetIos/ios.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { IOSWIDGETDATA } from './constants';

const IosWidgetContainer = () => {
  return (
    <div className="bg-[#F7F7F7] p-4">
      <CustomTypography tagType="p" fontSize="Body_Medium">
        با توجه به هدف نصبت میتونی کارت‌هایی که اطلاعات مهمی بهت میدن رو به صفحه اصلی گوشیت اضافه کنی :
      </CustomTypography>
      <div className="mt-4">
        <IosIcon className="flex justify-self-end ml-[38px] -mb-7 z-0" />
        <div className="p-3 bg-white rounded-xl shadow-[0_4px_15px_0_rgba(58,112,191,0.10)] z-10 relative">
          {IOSWIDGETDATA.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b-2 last:border-b-0 pb-4 mb-4 "
                style={{ borderColor: COLORS_LIST.Surface_SurfaceVariant }}
              >
                <div className="flex items-top gap-x-2">
                  <div
                    className="rounded-full w-[24px] h-[24px] flex justify-center items-center p-4"
                    style={{ backgroundColor: COLORS_LIST.Pink_50 }}
                  >
                    <CustomTypography
                      tagType="p"
                      fontSize="Headline_Small"
                      className="relative top-[2px]"
                      style={{ color: COLORS_LIST.Primary_Primary }}
                    >
                      {item.id}
                    </CustomTypography>
                  </div>

                  <CustomTypography tagType="p" fontSize="Body_Small">
                    {item.title}
                  </CustomTypography>
                </div>

                <CustomImage
                  src={item.image}
                  alt="icon"
                  width={999}
                  height={999}
                  className="!w-full !h-full mt-6 mb-4"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IosWidgetContainer;
