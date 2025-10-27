import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { TopicCardItemPropsType } from './type';

const TopicCardItem = (props: TopicCardItemPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    // pageNavigationHandler({
    //   showProgressBar: true,
    //   id: `chatbot-${props.id}`,
    //   linkTo: `/protected/note/addNote`,
    // });
  };

  return (
    <div className="glass-card shadow-sm rounded-3xl p-4 flex flex-col gap-3">
      <div className="flex flex-col items-end gap-1">
        <div className="flex justify-start items-start w-full">
          <CustomImage src={props.icon} />
        </div>
        <Typography scale="Lable" size="Large">
          {props.title}
        </Typography>
        <Typography scale="Body" size="Small">
          {props.description}
        </Typography>
      </div>
      <Button variant="fill" size="medium" color="primary" fullWidth onClick={onClick}>
        <Typography scale="Lable" size="SmallProminet" color="White">
          {props.btnLabel}
        </Typography>
      </Button>
    </div>
  );
};

export default TopicCardItem;
