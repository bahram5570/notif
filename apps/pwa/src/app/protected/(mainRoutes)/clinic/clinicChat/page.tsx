'use client';

import { Suspense } from 'react';

import ClinicChatContainer from '@components/pages/mainRoutes/clinic/ClinicChatContainer';

const ClinicChat = () => {
  return (
    <>
      <Suspense>
        <ClinicChatContainer />
      </Suspense>
    </>
  );
};

export default ClinicChat;
