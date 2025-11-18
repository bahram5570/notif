import { FC } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

type Props = {
  label: string;
  selected: boolean;
  onClick: () => void;
  subOption?: boolean;
};

const OptionCard: FC<Props> = ({ label, subOption, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-right border px-4 py-4 rounded-xl flex justify-between items-center
      ${selected ? 'border-pink-500 bg-pink-50' : 'border-gray-300'}`}
    >
      {subOption && (
        <span
          className={`relative w-5 h-5 rounded-full border 
          ${selected ? 'border-[#F24584]' : 'border-gray-400'}`}
        >
          {selected && <span className="absolute inset-1 rounded-full bg-[#F24584]" />}
        </span>
      )}

      <CustomTypography tagType="span" fontSize="Lable_Medium">
        {label}
      </CustomTypography>

      {!subOption && (
        <span
          className={`relative w-5 h-5 rounded-full border 
          ${selected ? 'border-[#F24584]' : 'border-gray-400'}`}
        >
          {selected && <span className="absolute inset-1 rounded-full bg-[#F24584]" />}
        </span>
      )}
    </button>
  );
};

export default OptionCard;
