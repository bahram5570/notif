import CrossIcon from '@assets/icons/plus.svg';

import { NameSelectorFilterResetBtnProps } from './types';

const NameSelectorFilterResetBtn = ({ onClick }: NameSelectorFilterResetBtnProps) => {
  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <div onClick={selectHandler} className="w-6 h-6 min-w-6 min-h-6 flex items-center justify-center">
      <CrossIcon className="w-5 h-auto rotate-45 stroke-impo_Neutral_OnBackground" />
    </div>
  );
};

export default NameSelectorFilterResetBtn;
