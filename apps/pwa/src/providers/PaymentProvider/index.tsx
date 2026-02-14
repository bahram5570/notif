'use client';

import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import { getPaymentCookie, removePaymentCookie } from '@actions/userCookies.actions';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useRouter } from 'next/navigation';

import { PAYMENT_QUERY_NAME } from './constants';
import { PaymentQueryTypes } from './types';

const PaymentProvider = () => {
  const router = useRouter();
  const isFirstTime = useRef(isDevelopeMode());
  const { callEvent } = useAnalytics();

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const handlePayment = async () => {
      const data = await getPaymentCookie();

      const params = new URLSearchParams(window.location.search).get(PAYMENT_QUERY_NAME);
      const queryData = params ? (JSON.parse(params) as PaymentQueryTypes) : null;

      if (data) {
        await removePaymentCookie();

        if (!queryData) {
          return;
        }

        if (!queryData.isSuccessful) {
          return;
        }
        callEvent('SubscriptionPaymentComplete');
        router.push(data.route);
      } else {
        if (queryData) {
          router.replace(window.location.pathname);
        }
      }
    };

    handlePayment();
  }, []);

  return <></>;
};

export default PaymentProvider;
