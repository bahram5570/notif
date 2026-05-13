import { useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ConfigResponseType } from '../../../__hooks__/useConfig/type';

const useSubmit = () => {
  const [isCheckRule, setIsCheckRule] = useState(true);
  const { getQuery, updateQuery } = useCustomReactQuery();

  const checkRuleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckRule(e.target.checked);
  };

  const successHandler = () => {
    const configData = getQuery<ConfigResponseType>({ queryKey: ['configNewExperience'] });
    updateQuery({ queryKey: ['configNewExperience'], payload: { ...configData, showRegualtion: false } });
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'shareeexperience/v3/experience/regualtion/accept',
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['regualtionAccept'],
    onSuccess: successHandler,
  });

  const submitHandler = () => {
    callApi();
  };

  return { submitHandler, isLoading, isCheckRule, checkRuleHandler };
};

export default useSubmit;
