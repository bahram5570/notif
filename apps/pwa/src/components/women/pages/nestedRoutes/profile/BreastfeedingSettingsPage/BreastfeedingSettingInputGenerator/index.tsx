import ContentWrapper from '@components/ui/ContentWrapper';
import RadioButton from '@components/ui/RadioButton';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import BreastfeedingSettingBtnModal from './BreastfeedingSettingBtnModal';
import { BreastfeedingSettingInputGeneratorPropsType } from './type';

const BreastfeedingSettingInputGenerator = ({
  description,
  type,
  label,
  name,
  value,
  changeValueHandler,
  ...rest
}: BreastfeedingSettingInputGeneratorPropsType) => {
  const { colors, typography } = useTheme();

  return (
    <div className="rounded-lg flex flex-col p-4 gap-3 w-full" style={{ backgroundColor: colors.White }}>
      <div className="p-2">
        <ContentWrapper label={label} description={description}>
          <>
            {type === 'input' && (
              <input
                type="text"
                value={value}
                className="w-full"
                onChange={(v) => changeValueHandler(v.target.value, name)}
                style={{ color: colors.Surface_OnSurfaceVariant, ...typography.Body.Large }}
              />
            )}
            {type === 'modal' && <BreastfeedingSettingBtnModal name={name} value={value} />}
            {type === 'RadioButton' && 'listLabel' in rest && (
              <div className="flex flex-col gap-2 items-end divide-y-[1px] w-full ">
                {rest.listLabel.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-end gap-3 w-full"
                    onClick={() => changeValueHandler(Number(item.value), name)}
                  >
                    <Typography size="Medium" scale="Body" color="Surface_OnSurfaceVariant">
                      {item.name}
                    </Typography>

                    <RadioButton isChecked={value === item.value} />
                  </div>
                ))}
              </div>
            )}
          </>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default BreastfeedingSettingInputGenerator;
