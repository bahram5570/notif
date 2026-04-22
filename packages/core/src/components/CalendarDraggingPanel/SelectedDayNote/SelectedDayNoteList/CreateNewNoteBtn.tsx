import { useMemo } from 'react';

import PlusIcon from '../../../../../../assets/src/shared/icons/plus.svg';
import { CustomButton } from '../../../../components/ui/CustomButton';
import { CustomTypography } from '../../../../components/ui/CustomTypography';

import { usePageNavigationLoading } from '../../../../hooks/usePageNavigationLoading';
import { useSignDateState } from '../../../../hooks/useSignDateState';
import { useSystem } from '../../../../hooks/useSystem';
import { CreateNewNoteBtnPropsType } from './type';

const CreateNewNoteBtn = ({ date }: CreateNewNoteBtnPropsType) => {
  const { appName } = useSystem();
  const { changeCurrentDate } = useSignDateState();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = () => {
    changeCurrentDate(date || '');

    pageNavigationHandler({
      showProgressBar: true,
      id: 'CreateNewNote',
      linkTo: `/protected/note/addNote`,
    });
  };

  const bg = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return '!bg-impo_PrimaryMan_PrimaryMan';

      default:
        return '';
    }
  }, [appName]);

  return (
    <CustomButton onClick={linkToHandler} className={`border-none ${bg}`}>
      <div className="flex items-center justify-center gap-2 w-full">
        <CustomTypography fontSize="Lable_Large" className="text-impo_White">
          ثبت یادداشت جدید
        </CustomTypography>

        <PlusIcon className="w-[18px] h-auto stroke-impo_White fill-impo_White" />
      </div>
    </CustomButton>
  );
};

export default CreateNewNoteBtn;
