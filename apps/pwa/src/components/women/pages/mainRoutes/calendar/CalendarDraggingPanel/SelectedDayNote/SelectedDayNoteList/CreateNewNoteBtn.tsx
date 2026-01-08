import PlusIcon from '@assets/icons/plus.svg';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useSignDateState from '@hooks/__sign__/useSignDateState';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

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
    <Dark_Button onClick={linkToHandler}>
      <div className="flex items-center justify-center gap-2 w-full">
        <Dark_Typography fontSize="Lable_Large" className="text-impo_White">
          ثبت یادداشت جدید
        </Dark_Typography>

        <PlusIcon className="w-[18px] h-auto stroke-impo_White fill-impo_White" />
      </div>
    </Dark_Button>
  );
};

export default CreateNewNoteBtn;
