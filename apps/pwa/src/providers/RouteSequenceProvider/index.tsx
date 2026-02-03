'use client';

import { createContext, useEffect, useState } from 'react';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { usePathname, useRouter } from 'next/navigation';

import {
  RouteSequenceContextTypes,
  RouteSequenceListTypes,
  RouteSequenceProviderProps,
  SequenceHandlerTypes,
} from './types';

export const RouteSequenceContext = createContext<RouteSequenceContextTypes>({ sequenceHandler: () => {} });

const RouteSequenceProvider = ({ children }: RouteSequenceProviderProps) => {
  const router = useRouter();
  const pathname = usePathname() || '';
  const { searchParams } = useQueryParamsHandler();
  const [routesList, setRoutesList] = useState<RouteSequenceListTypes>(null);

  let currentSearchParams = '';

  if (searchParams && searchParams instanceof URLSearchParams) {
    // # Error handling for iOS compatibility issues with searchParams.
    try {
      const entries = searchParams?.entries();

      if (entries && typeof entries.forEach === 'function') {
        entries.forEach(([key, value]: [string, string]) => {
          currentSearchParams += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // # Add fake history entries and reload the page
    if (routesList !== null) {
      const currentPathname = pathname + window.location.search;
      const currentRouteIndex = routesList.findIndex((route) => route === currentPathname);

      if (currentRouteIndex > -1) {
        const nextRoute = routesList?.[currentRouteIndex + 1];

        if (nextRoute) {
          history.pushState(null, '', nextRoute);
        } else {
          location.reload();
          setRoutesList(null);
        }
      }
    }
  }, [routesList, pathname, currentSearchParams]);

  const sequenceHandler: SequenceHandlerTypes = (list) => {
    if (list.length === 0) {
      return;
    }

    const updatedList = list.map((route) => {
      const newParams = route.includes('?') ? `&fakeHistory=${Math.random()}` : `?fakeHistory=${Math.random()}`;

      return route + newParams;
    });

    setRoutesList(updatedList);
    router.push(updatedList[0]);
  };

  return (
    <RouteSequenceContext.Provider value={{ sequenceHandler }}>
      <>{children}</>
    </RouteSequenceContext.Provider>
  );
};

export default RouteSequenceProvider;
