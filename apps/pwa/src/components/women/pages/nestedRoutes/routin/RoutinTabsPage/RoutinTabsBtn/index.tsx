import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ROUTIN_TABS } from './constants';
import { RoutinTabsBtnPropsType } from './type';

const RoutinTabsBtn = ({ activeTab, handleTabChange }: RoutinTabsBtnPropsType) => {
  const { colors } = useTheme();

  return (
    <CustomSlider gap={4} sidePadding={16}>
      {ROUTIN_TABS.map((tab) => {
        return (
          <div
            style={{
              border: `1px solid ${colors.Neutral_Surface}`,
              backgroundColor: activeTab === tab.id ? colors.PrimaryWoman_PrimaryContainer : colors.Neutral_Background,
            }}
            className={`rounded-full  py-2 w-full ${activeTab === tab.id && 'px-3'}`}
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
          >
            <Typography
              scale={activeTab === tab.id ? 'Lable' : 'Body'}
              size={activeTab === tab.id ? 'Medium' : 'Small'}
              color={activeTab === tab.id ? 'PrimaryWoman_Primary' : 'Neutral_OnBackground'}
              className="!w-32"
              textAlign="center"
            >
              {tab.label}
            </Typography>
          </div>
        );
      })}
    </CustomSlider>
  );
};

export default RoutinTabsBtn;
