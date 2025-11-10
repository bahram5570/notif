import { textShorter } from '@utils/scripts';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { TopicCardItemPropsType } from './type';

const TopicCardItem = (props: TopicCardItemPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };

  return (
    <div className="glass-card !bg-white/40 shadow-sm rounded-3xl p-4 flex flex-col h-full gap-3 relative">
      <div className="flex flex-col items-end gap-2">
        <div className="flex justify-start items-start w-full">
          <CustomImage src={props.icon} height={40} width={40} />
        </div>
        <div className="flex flex-col items-end gap-3">
          <Typography scale="Lable" size="Large">
            {textShorter(props.title, 35)}
          </Typography>
          <Typography scale="Body" size="Small">
            {textShorter(props.description, 80)}
          </Typography>
        </div>
      </div>
      <div className="mt-auto">
        <Button variant="fill" size="medium" color="primary" fullWidth onClick={onClick}>
          <Typography scale="Lable" size="SmallProminet" color="White">
            {props.btnLabel}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default TopicCardItem;
