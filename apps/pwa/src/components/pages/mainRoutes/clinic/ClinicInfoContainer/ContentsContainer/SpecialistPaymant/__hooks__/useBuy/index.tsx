import { useState } from 'react';

import { setPaymentCookie } from '@utils/cookies';
import { externalLink } from '@utils/navigation';

import { getUserCookie } from '@actions/cookie.actions';
import useAnalytics from '@hooks/useAnalytics';
import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { useParams, useRouter } from 'next/navigation';

import { ApprovedCodeHandlerTypes, BuyResponseTypes, UseBuyProps } from './types';

const useBuy = ({ id, questionValues, type }: UseBuyProps) => {
  const router = useRouter();
  const toast = useCustomToast();
  const { callEvent } = useAnalytics();
  const [approvedCode, setApprovedCode] = useState('');

  const params = useParams()?.clinicInfo || '';
  const clinicInfo = (params as string).split('-');

  const isCompletePayment = clinicInfo[1] === 'completePayment';
  const payValue = clinicInfo[0];
  const ticket = isCompletePayment ? type : Number(payValue);

  const successHandler = async (v: BuyResponseTypes) => {
    callEvent('Clinic_Payment_Press');

    if (v.isValid) {
      if (v.redirectBank) {
        const user = await getUserCookie();

        if (user?.identity) {
          setPaymentCookie({ route: `/protected/clinic/clinicChat?ticketId=${v.id}` });
          externalLink(`https://web.impo.app/financial/AsanPardakht/${v.bankResp.token}/${user.identity}`);
        }
      } else {
        router.push(`/protected/clinic/clinicChat?ticketId=${v.id}`);
      }
    } else {
      toast.notifyToastHandler({ message: 'مشکلی در پرداخت پیش آمد، دوباره تلاش کنید' });
    }
  };

  const { callApi, isLoading } = useApi<BuyResponseTypes>({
    method: 'PUT',
    onSuccess: successHandler,
    api: isCompletePayment ? `advice/newweb/${payValue}` : 'advice/newweb',
  });

  const approvedCodeHandler: ApprovedCodeHandlerTypes = (v: string) => {
    setApprovedCode(v);
  };

  const submitHandler = () => {
    const payload = {
      ticket,
      drId: id,
      code: approvedCode,
      text: questionValues.text,
      fileName: questionValues.fileName,
    };

    callApi(payload);
  };

  return { approvedCodeHandler, submitHandler, isLoading };
};

export default useBuy;
