import { FC } from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
};

const RewardCard: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="border border-[#3BA6FF] rounded-xl p-4 bg-white">
      <div className="flex flex-col items-center text-center">
        <img src={image} className="w-40 h-40 rounded-full mb-4" />
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default RewardCard;
