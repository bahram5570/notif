'use client';

import { FC, useRef } from 'react';

import logo from '@assets/images/blackFriday/logo.webp';

import CustomImage from '@components/ui/CustomImage';

import { Answers, SubAnswers } from '../types';
import DiscountCodeBlock from './DiscountCodeBlock';
import FixedFooter from './FixedFooter';
import RewardCard from './RewardCard';
import { computeReward } from './rewardMath';

type Props = {
  answers: Answers;
  subAnswers: SubAnswers;
};

const Reward: FC<Props> = ({ answers, subAnswers }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const data = computeReward(answers, subAnswers);

  return (
    <div className="min-h-screen max-w-md mx-auto px-6 py-8 space-y-6">
      <div ref={cardRef}>
        <RewardCard image={data.image} title={data.title} description={data.description} />
        <div className="absolute bottom-14 justify-center left-0 w-full hidden" id="impoLogo">
          <CustomImage alt="impo" src={logo} width={70} height={70} />
        </div>
      </div>

      <DiscountCodeBlock code={data.discountCode} />

      <FixedFooter cardRef={cardRef} />
    </div>
  );
};

export default Reward;
