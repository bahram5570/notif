'use client';

import { useEffect } from 'react';

import { getUserTracking, newUserTracking, updateUserTracking } from './__utils__';

import { usePathname } from 'next/navigation';

import { UserTrackingInfoTypes } from './types';

const UserTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleUserTrackingData = async () => {
      const data = getUserTracking();
      const queries = document.location.search;
      const currentTime = new Date().getTime();

      if (data) {
        const lastPathname = data.urls.at(-1)?.url;

        if (lastPathname !== pathname) {
          updateUserTracking(pathname + queries);
        }

        return;
      }

      const req = await fetch('/api/userInfo');
      const res: UserTrackingInfoTypes = await req.json();

      const expTime = currentTime + 1000 * 60 * 60 * 24 * 30; // # 30 days
      const username = `${currentTime.toString()}-${Math.random().toString().slice(2)}`;
      const firstUrl = { url: pathname + queries, visitTime: new Date().toISOString() };

      newUserTracking({
        expTime,
        username,
        ip: res.ip,
        macAddress: '',
        urls: [firstUrl],
        userAgent: res.userAgent,
      });
    };

    handleUserTrackingData();
  }, [pathname]);

  return <></>;
};

export default UserTracking;
