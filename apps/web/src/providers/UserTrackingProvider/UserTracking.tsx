'use client';

import React, { useEffect, useRef } from 'react';

// import { getUserTracking, newUserTracking, updateUserTracking } from './__utils__';
// import { isDevelopeMode } from '@repo/core/utils/system';

// import useUserTracking from '@hooks/useUserTracking';
// import { usePathname } from 'next/navigation';

// import { UserTrackingInfoTypes } from './types';

const UserTracking = ({ children }: { children: React.ReactNode }) => {
  // const pathname = usePathname();
  // const isFirstTime = useRef(isDevelopeMode());
  // const { callUserTracking } = useUserTracking();

  // useEffect(() => {
  //   if (isFirstTime.current) {
  //     isFirstTime.current = false;
  //     return;
  //   }

  //   const handleUserTrackingData = async () => {
  //     const data = getUserTracking();
  //     const queries = document.location.search;

  //     if (data) {
  //       updateUserTracking(pathname + queries);
  //       callUserTracking('-----');
  //       return;
  //     }

  //     const req = await fetch('/api/userInfo');
  //     const res: UserTrackingInfoTypes = await req.json();

  //     const currentTime = new Date().getTime();
  //     const expTime = currentTime + 1000 * 60 * 60 * 24 * 30; // # 30 days
  //     const username = `${currentTime.toString()}-${Math.random().toString().slice(2)}`;
  //     const firstUrl = { url: pathname + queries, visitTime: new Date().toISOString() };

  //     newUserTracking({
  //       expTime,
  //       username,
  //       ip: res.ip,
  //       macAddress: '',
  //       urls: [firstUrl],
  //       userAgent: res.userAgent,
  //     });

  //     callUserTracking('-----');
  //   };

  //   handleUserTrackingData();
  // }, [pathname]);

  return (
    <React.Fragment>
      <>{children}</>
    </React.Fragment>
  );
};

export default UserTracking;
