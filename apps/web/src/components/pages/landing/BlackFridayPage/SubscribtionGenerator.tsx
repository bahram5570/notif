import CheckCircle from '@assets/images/blackFriday/checkCircle.svg';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { SubscribtionReferal } from './constants';
import { SubscribtionListType } from './types';

const SubscribtionGenerator = ({ discountNumber, eventName, mounth, price, pricePerMounth }: SubscribtionListType) => {
  return (
    <>
      <CustomLink
        href={SubscribtionReferal}
        id={eventName}
        className=" rounded-2xl p-[2px] grid bg-[linear-gradient(#FB1B6D,#3D1BFF)] w-[146px]"
      >
        <CustomTypography
          fontSize="Lable_Large"
          tagType="p"
          className="bg-[linear-gradient(35deg,#FB1B6D,#3D1BFF)] rounded-t-2xl px-2 py-[10px] w-full text-center !text-impo_White"
        >
          {`${discountNumber} تخفیف ویژه`}
        </CustomTypography>
        <div className="pt-3 px-2 pb-4 rounded-b-[14px] bg-impo_White">
          <div className="flex gap-x-1 items-center">
            <CheckCircle />
            <CustomTypography fontSize="Title_Small" tagType="p" className="pt-[.5px] text-center">
              {`${mounth}`}
            </CustomTypography>
          </div>
          <div className="flex gap-x-1 items-center mt-2">
            <span className="text-[#353535] font-[350] text-[12px] ml-[4px]">ماهانه</span>
            <CustomTypography fontSize="Lable_Medium" tagType="span" className="pt-[.5px] text-center">
              {`${pricePerMounth} هزار تومان`}
            </CustomTypography>
          </div>
          <span className="w-full h-[1px] my-2 bg-[#202020] opacity-[0.20] block"></span>
          <CustomTypography fontSize="Lable_Medium" tagType="span" className="pt-[.5px] text-center">
            {`${price} تومان`}
          </CustomTypography>
        </div>
      </CustomLink>
    </>
  );
};

export default SubscribtionGenerator;
