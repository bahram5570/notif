'use client';

import ArrowBack from '@assets/images/geneticMarketing/arrowBack.svg';

import { useRouter } from 'next/navigation';

const GoBack = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <span onClick={() => router.back()} className="cursor-pointer">
        <ArrowBack />
      </span>
    </div>
  );
};

export default GoBack;
