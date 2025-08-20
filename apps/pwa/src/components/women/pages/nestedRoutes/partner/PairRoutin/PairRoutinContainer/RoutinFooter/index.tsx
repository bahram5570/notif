import { ProgramRateStatusEnum } from '../../enum';
import NoComment from './NoComment';
import ReviewComment from './ReviewComment';
import { RoutinFooterPropsType } from './type';

const RoutinFooter = ({ rate }: RoutinFooterPropsType) => {
  if (rate.status === ProgramRateStatusEnum.None) {
    return <></>;
  }

  return (
    <div className="mt-auto  ">
      {rate.status === ProgramRateStatusEnum.Pending && <NoComment />}
      {rate.status === ProgramRateStatusEnum.Complete && <ReviewComment rate={rate} />}
    </div>
  );
};

export default RoutinFooter;
