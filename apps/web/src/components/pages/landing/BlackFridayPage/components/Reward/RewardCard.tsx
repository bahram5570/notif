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
    <div className="mt-8 px-4">
      <div className="flex justify-center relative">
        <Image src={image} alt="image" className="!w-full !h-full object-cover" width={358} height={514} />
        <div className="absolute bottom-0 px-3">
          <CustomTypography className="text-center" tagType="h3" fontSize="Headline_Medium">
            {title}
          </CustomTypography>
          <CustomTypography className="mt-2 text-center pb-2" tagType="p" fontSize="Body_Medium">
            {description}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
