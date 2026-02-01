import ArrowIcon from '@assets/icons/calendarArrow.svg';
import PenIcon from '@assets/icons/pen.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useSignDateState from '@hooks/__sign__/useSignDateState';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { SelectedDayNoNotePropsType } from './type';

const SelectedDayNoNote = ({ date }: SelectedDayNoNotePropsType) => {
  const { changeCurrentDate } = useSignDateState();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = () => {
    changeCurrentDate(date);

    pageNavigationHandler({
      showProgressBar: true,
      id: 'SelectedDayNote',
      linkTo: '/protected/note/addNote',
    });
  };

  return (
    <div className="flex flex-row-reverse items-center justify-between py-2" onClick={linkToHandler}>
      <div className="flex flex-row-reverse items-center gap-2">
        <div className="w-12 h-12 bg-impo_Surface_SurfaceVariant flex justify-center items-center rounded-full">
          <PenIcon className="w-6 h-auto" />
        </div>

        <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
          اولین یادداشت امروز رو ثبت کن
        </CustomTypography>
      </div>

      <ArrowIcon className="w-6 h-6 stroke-impo_Surface_Outline" />
    </div>
  );
};

export default SelectedDayNoNote;
