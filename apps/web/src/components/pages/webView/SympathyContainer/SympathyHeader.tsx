import TickIcon from '@assets/icons/tick.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { HEADER_TIP_LIST } from './constants';

const SympathyHeader = () => {
  return (
    <div
      className=" !bg-no-repeat !bg-left pt-6 pl-2 flex flex-col  "
      style={{
        background:
          'url(/assets/images/webView/sympathy/hamdel-bg.png),linear-gradient(180deg, #F4F8FF 0%, #FFECF3 100%)',
      }}
    >
      <div className="flex flex-col gap-4 pr-6 p">
        <div className="flex flex-col gap-2">
          <CustomTypography fontSize="Title_Medium" className="!text-impo_Pink_900">
            با وصل شدن به همدلی میتونید :
          </CustomTypography>
          {/* <CustomTypography fontSize="Body_Large">حمایت بیشتر، گفتگوی بیشتر، ارتباط صمیمانه‌تر!</CustomTypography> */}
        </div>
        <div className="flex flex-col gap-2">
          {HEADER_TIP_LIST.map((tip, index) => {
            return (
              <div className="flex items-start gap-2" key={index}>
                <div className="w-6 h-6 flex justify-center ">
                  <TickIcon className="w-4 h-4 !fill-impo_Black" />
                </div>

                <CustomTypography fontSize="Body_Medium" className="pl-8 w-fit">
                  {/* <CustomTypography fontSize="Lable_SmallProminet" className=" inline" tagType="span">
                    {tip.text1}
                  </CustomTypography> */}
                  {tip.text1}
                </CustomTypography>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end items-end w-full">
        <CustomImage
          src="/assets/images/webView/sympathy/hamdel-bg-2.png"
          alt="sympathy2"
          width={150}
          height={281}
          className="h-auto w-3/4"
        />
      </div>
    </div>
  );
};

export default SympathyHeader;
