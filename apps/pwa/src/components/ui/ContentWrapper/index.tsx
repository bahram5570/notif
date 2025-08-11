import Typography from '../Typography';
import { ContentWrapperPropsType } from './type';

const ContentWrapper = ({ children, description, label }: ContentWrapperPropsType) => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <div className="flex flex-col items-end">
        {label && (
          <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
            {label}
          </Typography>
        )}

        {description && (
          <Typography scale="Body" size="Small" color="Surface_Outline">
            {description}
          </Typography>
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
