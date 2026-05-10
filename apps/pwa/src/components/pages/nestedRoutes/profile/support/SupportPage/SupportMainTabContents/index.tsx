import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import SupportActionsFooter from '../../SupportActionsFooter';
import { SUPPORT_ACTIONS_FOOTER_HEIGHT } from '../../SupportActionsFooter/constants';
import SupportActionsModal from '../../SupportActionsModal';
import SupportCardGenerator from '../../SupportCardGenerator';
import { SupportMainTabContentsTypes } from './types';

const SupportMainTabContents = ({ title, items, supportSheets }: SupportMainTabContentsTypes) => {
  return (
    <>
      <CustomTypography fontSize="Title_Medium" className="w-full text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>

      <div className="w-full flex flex-col pt-4" style={{ paddingBottom: SUPPORT_ACTIONS_FOOTER_HEIGHT + 32 }}>
        {items.map((item, index) => (
          <SupportCardGenerator title={item.title} id={item.id} isFirstChild={index === 0} key={index} />
        ))}
      </div>

      <SupportActionsFooter />
      <SupportActionsModal supportSheets={supportSheets} />
    </>
  );
};

export default SupportMainTabContents;
