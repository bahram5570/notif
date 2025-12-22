import { FC } from 'react';

import Image from 'next/image';

import style from './style.module.css';

import CustomTypography from '@components/ui/CustomTypography';

type Props = {
  image: string;
  title: string;
  description: string;
};

const RewardCard: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="mt-8 rounded-2xl bg-impo_Pink_100">
      <div className="rounded-t-xl p-6 !pb-0">
        <Image
          src={image}
          alt="image"
          className="!w-full !h-full object-cover rounded-t-2xl"
          width={358}
          height={514}
        />
      </div>
      <div
        className={`rounded-b-xl -mt-[80px] px-3 pt-[70px] pb-5 z-50 relative bg-white/60 backdrop-blur-sm ${style.curve}`}
      >
        <CustomTypography className="text-center" tagType="h3" fontSize="Title_Medium">
          {title}
        </CustomTypography>
        <CustomTypography className="mt-2 text-center" tagType="p" fontSize="Body_Medium">
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default RewardCard;
