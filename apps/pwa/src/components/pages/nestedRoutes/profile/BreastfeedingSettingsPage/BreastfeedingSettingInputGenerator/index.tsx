import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import ContentWrapper from '@components/ui/ContentWrapper';
import Dark_RadioButton from '@components/ui/Dark_RadioButton';
import Dark_Typography from '@components/ui/Dark_Typography';
import useOperatingSystem from '@hooks/useOperatingSystem';

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
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });

  return (
    <div className="rounded-lg flex flex-col p-4 gap-3 w-full bg-impo_Neutral_Background">
      <div className="p-2">
        <ContentWrapper label={label} description={description}>
          <>
            {type === 'input' && (
              <input
                type="text"
                value={value}
                className="w-full text-impo_Surface_OnSurfaceVariant bg-impo_Neutral_Background"
                onChange={(v) => changeValueHandler(v.target.value, name)}
                style={{ ...typographyFontStyles }}
              />
            )}
            {type === 'modal' && <BreastfeedingSettingBtnModal name={name} value={value} />}
            {type === 'RadioButton' && 'listLabel' in rest && (
              <div className="flex flex-col gap-2 items-end  w-full  ">
                {rest.listLabel.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-end gap-3 w-full ${rest.listLabel.length - 1 !== index && ' border-b border-impo_Neutral_Surface'}`}
                    onClick={() => changeValueHandler(Number(item.value), name)}
                  >
                    <Dark_Typography className="text-impo_Surface_OnSurfaceVariant" fontSize="Body_Medium">
                      {item.name}
                    </Dark_Typography>

                    <Dark_RadioButton isChecked={value === item.value} />
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
