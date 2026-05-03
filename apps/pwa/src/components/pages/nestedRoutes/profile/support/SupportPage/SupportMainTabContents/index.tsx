import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import SupportCardGenerator from '../../SupportCardGenerator';
import SupportMainTabContentsFooter from './SupportMainTabContentsFooter';
import { SUPPORT_MAIN_FOOTER_HEIGHT } from './SupportMainTabContentsFooter/constants';
import SupportMainTabContentsModal from './SupportMainTabContentsModal';
import { SupportMainTabContentsTypes } from './types';

const SupportMainTabContents = ({ title, items, supportSheets }: SupportMainTabContentsTypes) => {
  return (
    <>
      <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground ml-auto">
        {title}
      </CustomTypography>

      <div className="w-full flex flex-col pt-4" style={{ paddingBottom: SUPPORT_MAIN_FOOTER_HEIGHT + 32 }}>
        {items.map((item, index) => (
          <SupportCardGenerator title={item.title} id={item.id} isFirstChild={index === 0} key={index} />
        ))}
      </div>

      <SupportMainTabContentsFooter />
      <SupportMainTabContentsModal supportSheets={supportSheets} />
    </>
  );
};

export default SupportMainTabContents;
