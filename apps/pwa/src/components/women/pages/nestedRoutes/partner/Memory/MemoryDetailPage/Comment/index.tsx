import ChatIcon from '@assets/icons/ChatDots.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { CommentPropsType } from './type';

const Comment = ({ textPartner, fromMan, partnerName }: CommentPropsType) => {
  return (
    <div
      className={`flex flex-col items-end gap-2 justify-end py-2 pr-2 pl-10 rounded-lg ${!fromMan ? 'bg-impo_PrimaryMan_PrimaryContainerMan' : 'bg-impo_Primary_PrimaryContainer'}`}
    >
      <div className="flex items-center gap-1 justify-end">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Black">
          {`نظر ${!fromMan ? partnerName : 'شما'}`}
        </Dark_Typography>

        <ChatIcon className={`w-6 h-6 ${!fromMan ? 'fill-impo_PrimaryMan_PrimaryMan' : 'fill-impo_Primary_Primary'}`} />
      </div>
      <Dark_Typography fontSize="Body_Small" className="text-impo_Black">
        {textPartner}
      </Dark_Typography>
    </div>
  );
};

export default Comment;
