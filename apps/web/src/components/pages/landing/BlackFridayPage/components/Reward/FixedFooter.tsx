import { FC } from 'react';

const FixedFooter: FC = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        کارتت رو استوری کن و دوستانت رو دعوت کن. هر دعوت یک امتیاز و ۱۰٪ تخفیف بیشتر داره.
      </p>

      <button className="w-full bg-pink-500 text-white py-3 rounded-xl">دانلود عکس</button>
    </div>
  );
};

export default FixedFooter;
