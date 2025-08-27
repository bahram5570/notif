'use client';

import React, { useEffect, useState } from 'react';

import { getUserTracking, newUserTracking, updateUserTracking } from './__utils__';

import useUserTracking from '@hooks/useUserTracking';
import { usePathname } from 'next/navigation';

import { UserTrackingInfoTypes } from './types';

const UserTracking = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [resetKey, setResetKey] = useState(1);
  const { callUserTracking } = useUserTracking();

  const sendRequestHandler = () => {
    callUserTracking('ignore it!');
  };

  useEffect(() => {
    const handleUserTrackingData = async () => {
      const data = getUserTracking();
      const queries = document.location.search;
      const currentTime = new Date().getTime();

      if (data) {
        const lastPathname = data.urls.at(-1)?.url;

        if (lastPathname !== pathname) {
          const newUrl = pathname + queries;
          updateUserTracking(newUrl);
          sendRequestHandler();
        }

        return;
      }

      // # Set new data on initial render or not having data
      const req = await fetch('/api/userInfo');
      const res: UserTrackingInfoTypes = await req.json();

      const expTime = currentTime + 1000 * 60 * 60 * 24 * 30; // # 30 days
      const username = `${currentTime.toString()}-${Math.random().toString().slice(2)}`;
      const firstUrl = { url: pathname + queries, visitTime: new Date().toISOString() };

      const payload = {
        expTime,
        username,
        ip: res.ip,
        macAddress: '',
        urls: [firstUrl],
        userAgent: res.userAgent,
      };

      newUserTracking(payload);
      setResetKey(resetKey + 1);
      sendRequestHandler();
    };

    handleUserTrackingData();
  }, [pathname]);

  return <React.Fragment key={resetKey}>{children}</React.Fragment>;
};

export default UserTracking;

// 'use client';

// import React, { useEffect, useState } from 'react';

// import { getUserTracking, newUserTracking, updateUserTracking } from './__utils__';

// import { usePathname } from 'next/navigation';

// import { UserTrackingInfoTypes } from './types';

// const UserTracking = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();
//   const [resetKey, setResetKey] = useState(1);

//   useEffect(() => {
//     const handleUserTrackingData = async () => {
//       const data = getUserTracking();
//       const queries = document.location.search;
//       const currentTime = new Date().getTime();

//       if (data) {
//         const lastPathname = data.urls.at(-1)?.url;

//         if (lastPathname !== pathname) {
//           updateUserTracking(pathname + queries);
//         }

//         return;
//       }

//       const req = await fetch('/api/userInfo');
//       const res: UserTrackingInfoTypes = await req.json();

//       const expTime = currentTime + 1000 * 60 * 60 * 24 * 30; // # 30 days
//       const username = `${currentTime.toString()}-${Math.random().toString().slice(2)}`;
//       const firstUrl = { url: pathname + queries, visitTime: new Date().toISOString() };

//       newUserTracking({
//         expTime,
//         username,
//         ip: res.ip,
//         macAddress: '',
//         urls: [firstUrl],
//         userAgent: res.userAgent,
//       });

//       setResetKey(resetKey + 1);
//     };

//     handleUserTrackingData();
//   }, [pathname]);

//   return <React.Fragment key={resetKey}>{children}</React.Fragment>;
// };

// export default UserTracking;
