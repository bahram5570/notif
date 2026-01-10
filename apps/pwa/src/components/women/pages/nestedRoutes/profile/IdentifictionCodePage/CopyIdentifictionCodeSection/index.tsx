import CopyIcon from '@assets/icons/Copy.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { CopyIdentifictionCodeSectionPropsType } from './type';

const CopyIdentifictionCodeSection = ({ interfaceCode, copyToClipboard }: CopyIdentifictionCodeSectionPropsType) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex items-center gap-2 px-9 py-2 rounded-full border-[1px] select-none cursor-pointer w-full h-[48px] bg-impo_Neutral_Background border-impo_Neutral_Background"
        onClick={() => {
          copyToClipboard(String(interfaceCode));
        }}
        id="InviteFromCopyCode"
      >
        <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Title_Medium">
          {interfaceCode}
        </Dark_Typography>
        <CopyIcon className="w-8 h-8 stroke-impo_Surface_Outline" />
      </div>
    </div>
  );
};

export default CopyIdentifictionCodeSection;
