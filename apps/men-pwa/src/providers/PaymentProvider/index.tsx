'use client';

import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import { getPaymentCookie, removePaymentCookie } from '@actions/userCookies.actions';
import { PAYMENT_QUERY_NAME } from '@repo/core/constants/payment.contants';
import { useRouter } from 'next/navigation';

import { PaymentQueryTypes } from './types';

const PaymentProvider = () => {
  const router = useRouter();
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
