import TickIcon from '@assets/icons/tick.svg';

import CustomTypography from '@components/ui/CustomTypography';

import { HEADER_TIP_LIST } from './constants';

const SympathyHeader = () => {
  return (
    <div className="bg-[url('/assets/images/webView/sympathy/hamdel-bg.webp')]  h-[18rem] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col gap-4 px-4 p">
        <div className="flex flex-col gap-2">
          <CustomTypography fontSize="Title_Large" className="!text-impo_Pink_900">
            همدلی با ایمپو
          </CustomTypography>
          <CustomTypography fontSize="Body_Large">حمایت بیشتر، گفتگوی بیشتر، ارتباط صمیمانه‌تر!</CustomTypography>
        </div>
        <div className="flex flex-col gap-2">
          {HEADER_TIP_LIST.map((tip, index) => {
            return (
              <div className="flex items-start gap-1" key={index}>
                <div className="w-6 h-6 flex justify-center ">
                  <TickIcon className="w-4 h-4 !fill-impo_Black" />
                </div>

                <CustomTypography fontSize="Body_Small" className="pl-8 w-fit">
                  <CustomTypography fontSize="Lable_SmallProminet" className=" inline" tagType="span">
                    {tip.text1}
                  </CustomTypography>
                  {tip.text2}
                </CustomTypography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SympathyHeader;
