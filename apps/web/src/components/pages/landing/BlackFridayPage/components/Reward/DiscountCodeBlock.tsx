import { FC, useState } from 'react';

import Copy from '@assets/images/blackFriday/copy.svg';
import Unread from '@assets/images/blackFriday/unread.svg';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import useCustomToast from '@hooks/useCustomToast';
import { COLORS_LIST } from '@theme/colors';

type Props = {
  code: string;
};

const DiscountCodeBlock: FC<Props> = ({ code = 'DELARAMJAN13' }) => {
  const { onToast } = useCustomToast();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    onToast({ message: 'کد تخفیف با موفقیت کپی شد', type: 'success' });

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div className="mt-4">
      <CustomTypography className="text-center" tagType="h3" fontSize="Lable_Medium">
        این کد تخفیف رو با عشق تقدیمت می‌کنیم تا همراهت در این سفر باشیم.
      </CustomTypography>

      <div
        className="mt-2 rounded-full flex items-center gap-x-5 py-2 px-4"
        style={{ background: COLORS_LIST.Neutral_Surface }}
      >
        <div className="rounded-full bg-white py-1 px-4 flex items-center gap-x-3">
          {copied ? <Unread /> : <Copy onClick={handleCopy} className="cursor-pointer" />}

          <CustomTypography className="text-center" tagType="h3" fontSize="Body_Large">
            {code}
          </CustomTypography>
        </div>

        <CustomLink href="/" target="_blank" className="w-full text-center">
          <CustomTypography fontSize="Lable_Medium" color="Primary_Primary">
            استفاده از کد تخفیف
          </CustomTypography>
        </CustomLink>
      </div>
    </div>
  );
};

export default DiscountCodeBlock;
