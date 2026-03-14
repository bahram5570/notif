import NoComment from './NoComment';
import ReviewComment from './ReviewComment';
import { ProgramRateStatusEnum } from './enum';
import { RoutinFooterPropsType } from './type';

export const RoutinFooter = ({ rate }: RoutinFooterPropsType) => {
  if (rate.status === ProgramRateStatusEnum.None) {
    return <></>;
  }

  return (
    <div className="mt-auto pt-2 ">
      {rate.status === ProgramRateStatusEnum.Pending && <NoComment />}
      {rate.status === ProgramRateStatusEnum.Complete && <ReviewComment rate={rate} />}
    </div>
  );
};
