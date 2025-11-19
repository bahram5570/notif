import { FC } from 'react';

import welcomVector from '@assets/images/blackFriday/welcomVector.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

type Props = {
  image: string;
  title: string;
  description: string;
};

const RewardCard: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="mt-8 px-4">
      <div className="flex justify-center ">
        <CustomImage alt="image" src={welcomVector || image} className="w-[294px] h-[294px] object-cover " />
      </div>
      <CustomTypography className="text-center" tagType="h3" fontSize="Headline_Medium">
        {/* {title} */}
        دل‌آرام جان
      </CustomTypography>
      <CustomTypography className="mt-2 text-center pb-5" tagType="p" fontSize="Body_Medium">
        {/* {description} */}
        دل‌آرام؛ آرامشِ دل، نماد فردی که آرامش رو به دلش هدیه کرده. مثل تو که وسط شلوغی و کار و بار تونستی برای خودت و
        مراقبت از خودت زمان بذاری، یعنی ارزش و قدر خودتو می‌دونی. ما در ایمپو بهت افتخار می‌کنیم، دلت همیشه آروم.
      </CustomTypography>
    </div>
  );
};

export default RewardCard;
