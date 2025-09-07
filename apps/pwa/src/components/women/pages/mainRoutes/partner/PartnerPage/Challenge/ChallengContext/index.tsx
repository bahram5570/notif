import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CustomLink from '../../CustomLink';
import { ChallengContextPropsType } from './type';
import { buttonLinkHandler } from './utilis';

const ChallengContext = ({ card, valid }: ChallengContextPropsType) => {
  const { colors } = useTheme();

  return (
    <div className=" flex flex-col gap-4 p-4 rounded-xl shadow-sm" style={{ backgroundColor: colors.White }}>
      <div className="flex justify-center items-center px-2">
        <CustomImage src={card.leftIcon} style={{ scale: !valid ? '2' : 'inherit' }} />
        <div className="px-3">
          <Typography scale="Lable" size="Large" textAlign="center" className="p-2">
            {card.text}
          </Typography>
        </div>

        {card.rightIcon !== '' && <CustomImage src={card.rightIcon} />}
      </div>
      {card.btnText && (
        <CustomLink lable={card.btnText} link={buttonLinkHandler(card.link)} id={`Challenge-${card.btnText}`} />
      )}
    </div>
  );
};

export default ChallengContext;
