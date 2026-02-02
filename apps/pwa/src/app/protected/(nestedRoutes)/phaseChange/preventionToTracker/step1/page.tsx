'use client';

import { useEffect, useRef, useState } from 'react';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { isDevelopeMode } from '@repo/core/utils/system';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

import usePhaseChangeInstallationPurpose from '../../__hooks__/usePhaseChangeInstallationPurpose';

const Step1 = () => {
  const [updatedPayload, setUpdatedPayload] = useState<null | ActivationPayloadTypes>(null);
  const { payload } = usePhaseChangePayload();

  const payloadHandler: PayloadHandlerTypes = (v) => {
    const copyPayload = { ...payload, ...v };
    setUpdatedPayload(copyPayload);
  };

  usePhaseChangeInstallationPurpose({ payloadHandler, installationPurpose: 'tracker' });

  if (updatedPayload === null) {
    return <></>;
  }

  return <PreventionToTrackerContainer updatedPayload={updatedPayload} />;
};

export default Step1;

const PreventionToTrackerContainer = ({ updatedPayload }: { updatedPayload: ActivationPayloadTypes }) => {
  const isFirstTime = useRef(isDevelopeMode());
  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({
    payload: updatedPayload,
    api: 'info/period/enter',
  });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      phaseChangeHandler();
    }
  }, []);

  return (
    <div className="relative w-full h-[100dvh]">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <CustomSpinner className="border-impo_Surface_Outline" />
        </div>
      )}

      {fetchedUser && <CompleteRegisterContainer payload={updatedPayload} fetchedUser={fetchedUser} />}
    </div>
  );
};
