import { FC } from 'react';

import Image from 'next/image';

import CustomTypography from '@components/ui/CustomTypography';

type Props = {
  image: string;
  title: string;
  description: string;
};

const RewardCard: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="mt-8">
      <div className="flex justify-center relative">
        <Image src={image} alt="image" className="!w-full !h-full object-cover" width={358} height={514} />
        <div className="absolute top-[22rem] px-3 max-w-[370px] !max-h-[160px]">
          <CustomTypography className="text-center" tagType="h3" fontSize="Title_Medium">
            {title}
          </CustomTypography>
          <CustomTypography className="mt-2 text-center" tagType="p" fontSize="Body_Medium">
            {description}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
