'use client';

import ArrowBack from '@assets/images/blackFriday/arrowBack.svg';

import { useRouter } from 'next/navigation';

const GoBack = ({ onClick }: { onClick?: () => void }) => {
  const router = useRouter();

  return (
    <div className="w-full">
      <span onClick={() => (onClick ? onClick() : router.back())} className="cursor-pointer">
        <ArrowBack />
      </span>
    </div>
  );
};

export default GoBack;
