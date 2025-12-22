import { FC, useState } from 'react';

import Copy from '@assets/images/blackFriday/copy.svg';
import Unread from '@assets/images/blackFriday/unread.svg';
import { toEnglishNumbers } from '@utils/numbers';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import useCustomToast from '@hooks/useCustomToast';

import { SubscribtionReferal } from '../../constants';

type Props = {
  code: string;
  eventUse: string;
  eventCopy: string;
};

const DiscountCodeBlock: FC<Props> = ({ code, eventUse, eventCopy }) => {
  const { onToast } = useCustomToast();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(toEnglishNumbers(code));
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopied(true);
      onToast({ message: 'کد تخفیف با موفقیت کپی شد', type: 'success' });

      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      onToast({ message: 'کپی کردن انجام نشد', type: 'error' });
    }
  };

  return (
    <div className="rounded-full flex items-center gap-x-5 py-2 px-4 bg-impo_Neutral_Surface">
      <div className="rounded-full bg-white py-1 px-4 flex items-center gap-x-3" id={eventCopy}>
        {copied ? <Unread /> : <Copy onClick={handleCopy} className="cursor-pointer" />}

        <CustomTypography numbersMode="english" className="text-center" tagType="h3" fontSize="Body_Large">
          {code}
        </CustomTypography>
      </div>

      <CustomLink href={SubscribtionReferal} className="w-full text-center" id={eventUse}>
        <CustomTypography fontSize="Lable_Medium" color="Primary_Primary">
          از تخفیفت استفاده کن
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default DiscountCodeBlock;
