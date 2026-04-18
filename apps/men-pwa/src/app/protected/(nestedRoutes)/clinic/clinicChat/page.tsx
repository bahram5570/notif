'use client';

import { Suspense } from 'react';

import ClinicChatPage from '@components/pages/nestedRoutes/__clinic__/ClinicChatPage';

const ClinicChat = () => {
  return (
    <>
      <Suspense>
        <ClinicChatPage />
      </Suspense>
    </>
  );
};

export default ClinicChat;
