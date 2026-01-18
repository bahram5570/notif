import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import ActivationBtn from '@components/activation/ActivationBtn';
import CustomModal from '@components/ui/CustomModal';
import Dark_Typography from '@components/ui/Dark_Typography';
import CustomLink from '@components/women/pages/mainRoutes/partner/PartnerPage/CustomLink';
import { ACTIVATION_INTERFACE_CODE } from '@constants/activation.constants';
import useOperatingSystem from '@hooks/useOperatingSystem';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useInterfaceCode from './__hooks__/useInterfaceCode';
import { InterfaceCodeContainerProps } from './types';

const InterfaceCodeContainer = ({ onComplete }: InterfaceCodeContainerProps) => {
  const { operatingSystem } = useOperatingSystem();
  const { getQueryParams } = useQueryParamsHandler();
  const { code, codeHandler, submitHandler, isLoading } = useInterfaceCode({ onComplete });

  const isOpen = getQueryParams(ACTIVATION_INTERFACE_CODE) !== null;
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });

  return (
    <>
      <div className="fixed left-0 right-0 bottom-24 flex justify-center">
        <CustomLink
          link={`?${ACTIVATION_INTERFACE_CODE}=true`}
          lable="کد معرف داری؟ اینجا اضافه کن"
          id="interface-code-link"
          className="!bg-impo_Transparent"
        />
      </div>

      <CustomModal isOpen={isOpen} isFullScreen={false} isSlidingMode={true}>
        {isOpen && (
          <div className="flex flex-col items-center pb-4">
            <Dark_Typography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
              کد معرف
            </Dark_Typography>

            <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface text-center pt-2 pb-4">
              اینجا کدمعرفتو وارد کن تا هم خودت هم دوستت ده روز اشتراک رایگان بگیرین
            </Dark_Typography>

            <input
              value={code}
              placeholder="اینجا تایپ کن"
              style={{ ...typographyFontStyles }}
              onChange={(e) => codeHandler(e.target.value)}
              className="
                          w-full 
                          h-[40px] 
                          flex 
                          items-center 
                          bg-impo_Neutral_Background 
                          border-[1px] 
                          border-impo_Surface_SurfaceVariant 
                          rounded-full 
                          outline-none 
                          placeholder-impo_Surface_SurfaceVariant
                          text-impo_Neutral_OnBackground
                          px-5 
                          mb-6
                        "
            />

            <ActivationBtn showBtn={true} isLoading={isLoading} onClick={submitHandler}>
              ارسال
            </ActivationBtn>
          </div>
        )}
      </CustomModal>
    </>
  );
};

export default InterfaceCodeContainer;
