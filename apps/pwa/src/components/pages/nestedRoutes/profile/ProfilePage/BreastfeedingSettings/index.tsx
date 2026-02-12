import { useEffect, useState } from 'react';

import PregnancySettingsIcon from '@assets/icons/profile/pregnancySettings.svg';

import { InstallationPurposeEnum } from '@repo/core/constants/user.constants';

import ProfileLinkGenerator from '../ProfileLinkGenerator';
import { BreastfeedingSettingPropsType } from './type';

const BreastfeedingSetting = ({ status, isDelivery, pregnancyDate }: BreastfeedingSettingPropsType) => {
  const [linkTo, setLinkTo] = useState<null | string>(null);

  useEffect(() => {
    if (status === InstallationPurposeEnum.breastfeeding.status) {
      setLinkTo(`/protected/breastfeedingSettings`);
    }
  }, [status, isDelivery, pregnancyDate]);

  return (
    <>
      {linkTo && (
        <ProfileLinkGenerator
          link={linkTo}
          needsSubscription
          Icon={PregnancySettingsIcon}
          name={'ویرایش اطلاعات زایمان'}
          isFirstItem={true}
        />
      )}
    </>
  );
};

export default BreastfeedingSetting;
