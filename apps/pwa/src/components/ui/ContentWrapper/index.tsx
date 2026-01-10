import Dark_Typography from '../Dark_Typography';
import { ContentWrapperPropsType } from './type';

const ContentWrapper = ({ children, description, label }: ContentWrapperPropsType) => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <div className="flex flex-col items-end">
        {label && (
          <Dark_Typography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
            {label}
          </Dark_Typography>
        )}

        {description && (
          <Dark_Typography className="text-impo_Surface_Outline" fontSize="Body_Small">
            {description}
          </Dark_Typography>
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
