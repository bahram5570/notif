'use client';

import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import { getPaymentCookie, removePaymentCookie } from '@actions/userCookies.actions';
import { PAYMENT_QUERY_NAME } from '@repo/core/constants/payment.contants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { PaymentQueryTypes } from './types';

const PaymentProvider = () => {
  const router = useCustomRouter();
  const { callEvent } = useAnalytics();
  const isFirstTime = useRef(isDevelopeMode());

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

    setTimeout(() => {
      handlePayment();
    }, 3000);
  }, []);

  return <></>;
};

export default PaymentProvider;
