import { HEADER_HEIGHT } from '../../../constants/app.constants';
import { CustomSpinner } from '../../ui/CustomSpinner';

export const Loading = () => {
  return (
    <div
      className="w-full flex justify-center items-end"
      style={{ paddingTop: HEADER_HEIGHT + 16, paddingBottom: HEADER_HEIGHT + 16 }}
    >
      <CustomSpinner size={40} className="border-impo_Surface_Outline" />
    </div>
  );
};
