import CopyIcon from '@assets/icons/Copy.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CopyIdentifictionCodeSectionPropsType } from './type';

const CopyIdentifictionCodeSection = ({ interfaceCode, copyToClipboard }: CopyIdentifictionCodeSectionPropsType) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex items-center gap-2 p-3 rounded-xl border-[1px] select-none cursor-pointer w-full h-[48px] bg-impo_Surface_InverseOnSurface border-impo_PrimaryMan_PrimaryMan border-dashed"
        onClick={() => {
          copyToClipboard(String(interfaceCode));
        }}
        id="InviteFromCopyCode"
      >
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Medium">
          {String(interfaceCode)}
        </CustomTypography>
        <CopyIcon className="w-8 h-8 stroke-impo_Surface_Outline" />
      </div>
    </div>
  );
};

export default CopyIdentifictionCodeSection;
