import { ctaBannerService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import AlphabetBtns from '@components/SelectName/AlphabetBtns';
import NamesTable from '@components/SelectName/NamesTable';
import SelectNameAuthorProfile from '@components/SelectName/SelectNameAuthorProfile';
import CustomTypography from '@components/ui/CustomTypography';

import AlphabetContent from './AlphabetContent';
import Description from './Description';
import IntroductionSection from './IntroductionSection';
import NameSelectionHeading from './NameSelectionHeading';
import { NAME_SELECTION_BANNER_NAME_1, PERSIAN_NAME_DICTIONARY } from './constants';

const IranGirlNamePage = async () => {
  const { ctaData } = await ctaBannerService(NAME_SELECTION_BANNER_NAME_1);
  const dataEntries = Object.entries(PERSIAN_NAME_DICTIONARY);

  return (
    <HeaderFooterContainer>
      <div className="w-full flex flex-col items-center pb-12 mx-auto">
        <NameSelectionHeading />
        <QrCode />
        <SelectNameAuthorProfile
          name=" کیمیا رفیعی"
          publishDate="31 مرداد"
          readingTime=" 12 دقیقه برای خواندن"
          imageUrl="/assets/images/doctorKimia.jpg"
        />

        <div className="w-full sm:w-9/12 md:w-8/12 lg:w-6/12 px-3 pb-16">
          <AlphabetBtns
            bgColor1="Pink_300"
            bgColor2="Pink_100"
            textColor="Pink_900"
            list={PERSIAN_NAME_DICTIONARY}
            title="اسم دختر ایرانی اصیل لاکچری بر اساس حروف الفبا"
            description={<AlphabetContent />}
          />
          <IntroductionSection />

          {ctaData && (
            <div className="w-full pb-20">
              <CtaBanner {...ctaData} />
            </div>
          )}

          {dataEntries.map((item) => (
            <div id={item[0]} key={item[0]} className="mb-16 flex flex-col gap-3">
              <CustomTypography
                fontSize="Headline_Small"
                tagType="h2"
              >{`${item[1].labelTitle} «${item[1].category}»`}</CustomTypography>

              <NamesTable
                list={item[1].list}
                titleBgColor="Primary_Primary"
                borderColor="Pink_300"
                bgColor1="Pink_100"
                bgColor2="Pink_50"
              />
            </div>
          ))}

          <Description />
        </div>

        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default IranGirlNamePage;
