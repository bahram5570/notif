import PlusIcon from '@assets/icons/plus.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useSignDateState from '@hooks/__sign__/useSignDateState';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { CreateNewNoteBtnPropsType } from './type';

const CreateNewNoteBtn = ({ date }: CreateNewNoteBtnPropsType) => {
  const { changeCurrentDate } = useSignDateState();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = () => {
    changeCurrentDate(date);

    pageNavigationHandler({
      showProgressBar: true,
      id: 'CreateNewNote',
      linkTo: `/protected/note/addNote`,
    });
  };

  return (
    <CustomButton onClick={linkToHandler}>
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
