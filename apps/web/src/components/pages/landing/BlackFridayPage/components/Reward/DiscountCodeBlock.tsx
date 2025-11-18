import { FC } from 'react';

type Props = {
  code: string;
};

const DiscountCodeBlock: FC<Props> = ({ code }) => {
  return (
    <div className="mt-6">
      <p className="text-sm text-gray-700 mb-2">کد تخفیف شما:</p>

      <div className="flex items-center border rounded-xl p-3 bg-white">
        <span className="font-mono text-sm flex-1">{code}</span>

        <button onClick={() => navigator.clipboard.writeText(code)} className="text-pink-600 text-xs font-medium">
          کپی کردن
        </button>
      </div>
    </div>
  );
};

export default DiscountCodeBlock;
