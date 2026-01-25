import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

const NoComment = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  return (
    <div className=" rounded-xl w-full flex flex-row-reverse justify-between items-center px-4 py-3 bg-impo_Neutral_Surface">
      <div className="flex flex-col items-end px-3 py-2 gap-2">
        <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Lable_Medium">
          هنوز نظرت رو ثبت نکردی؟
        </Dark_Typography>
        <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
          نظرت راجع به برنامه برامون مهمه!
        </Dark_Typography>
      </div>
      <Dark_Button onClick={() => newQueryParamsHandler({ [MODALS.MODAL_FEEDBACK]: 'true' })} className="max-w-fit">
        <Dark_Typography className="text-impo_PrimaryMan_OnPrimaryMan" fontSize="Lable_Medium">
          ثبت نظر
        </Dark_Typography>
      </Dark_Button>
    </div>
  );
};

export default NoComment;
