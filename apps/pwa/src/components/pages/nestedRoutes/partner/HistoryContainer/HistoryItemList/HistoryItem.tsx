import CaretLeftIcon from '@assets/icons/CaretLeft.svg';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import ProgressBar from '../../chatContainer/ProgressBar';
import { HistoryItemPropsType } from './type';

const HistoryItem = (props: HistoryItemPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'history', showProgressBar: true, linkTo: `/protected/challenge/${props.id}` });
  };

  return (
    <div onClick={onClick}>
      <div className=" flex flex-col gap-3 p-5 rounded-2xl border border-impo_Neutral_Surface">
        <div className="flex flex-row-reverse w-full gap-3 justify-between items-center border-b border-impo_Surface_SurfaceVariant pb-3">
          <div className="flex flex-row-reverse gap-2">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex items-center relative w-14">
                <div className="w-8 h-8 rounded-full border-2  overflow-hidden ml-0 relative bg-impo_White border-impo_White">
                  <CustomImage_NEW src={props.womanAvatar} className=" !object-cover border border-impo_White" fill />
                </div>
                <div
                  className={`w-8 h-8 rounded-full border-2 border-impo_White bg-impo_White overflow-hidden  ml-0 absolute left-5 `}
                >
                  <CustomImage_NEW src={props.manAvatar} className=" !object-cover border border-impo_White" fill />
                </div>
              </div>
              <CustomTypography fontSize="Lable_Medium" className="text-impo_Primary_Primary w-full text-center">
                {props.title}
              </CustomTypography>
            </div>
            <div className="flex flex-col items-end gap-2">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                {props.text}
              </CustomTypography>

              <CustomTypography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
                {props.description}
              </CustomTypography>
            </div>
          </div>

          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-impo_Primary_PrimaryContainer dark:bg-impo_Pink_800">
            <CaretLeftIcon className="w-6 h-6 stroke-impo_Primary_Primary" />
          </div>
        </div>
        <div>
          <ProgressBar
            avatar={props.womanAvatar}
            partnerAvatar={props.manAvatar}
            progress={props.progress}
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
