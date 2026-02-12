import { useEffect, useState } from 'react';

import PeriodSettingsIcon from '@assets/icons/profile/periodSettings.svg';

import { InstallationPurposeEnum } from '@repo/core/constants/user.constants';

import ProfileLinkGenerator from '../ProfileLinkGenerator';
import { PeriodSettingsType } from './type';

const PeriodSettings = ({ status }: PeriodSettingsType) => {
  const [linkTo, setLinkTo] = useState<null | string>(null);

  useEffect(() => {
    if (
      status !== InstallationPurposeEnum.breastfeeding.status &&
      status !== InstallationPurposeEnum.pregnancy.status
    ) {
      setLinkTo(`/protected/periodSettings`);
    }
  }, [status]);

  return (
    <>
      {linkTo && (
        <ProfileLinkGenerator
          link={linkTo}
          needsSubscription={true}
          Icon={PeriodSettingsIcon}
          name="ویرایش اطلاعات چرخه"
          isFirstItem={true}
        />
      )}
    </>
  );
};

export default PeriodSettings;
