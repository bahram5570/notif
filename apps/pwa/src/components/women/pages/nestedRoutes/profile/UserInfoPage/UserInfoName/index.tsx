import useTheme from '@hooks/useTheme';

import { UserInfoNameTypes } from './types';

const UserInfoName = ({ value, valueHandler }: UserInfoNameTypes) => {
  const { colors, typography } = useTheme();

  return (
    <input
      type="text"
      value={value}
      className="w-full"
      onChange={(v) => valueHandler(v.target.value)}
      style={{ color: colors.Surface_OnSurfaceVariant, ...typography.Body.Large }}
    />
  );
};

export default UserInfoName;
