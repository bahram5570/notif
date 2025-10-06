import { ctaBannerService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import AlphabetBtns from '@components/SelectName/AlphabetBtns';
import NamesTable from '@components/SelectName/NamesTable';
import SelectNameAuthorProfile from '@components/SelectName/SelectNameAuthorProfile';
import CustomTypography from '@components/ui/CustomTypography';

import Description from './Description';
import IntroductionSection from './IntroductionSection';
import NameSelectionHeading from './NameSelectionHeading';
import { NAME_SELECTION_BANNER_NAME_1, PERSIAN_NAME_DICTIONARY } from './constants';

const GirlNamePage = async () => {
  const { ctaData } = await ctaBannerService(NAME_SELECTION_BANNER_NAME_1);
  const dataEntries = Object.entries(PERSIAN_NAME_DICTIONARY);

  return (
    <HeaderFooterContainer>
      <div className="w-full flex flex-col items-center pb-12 mx-auto">
        <NameSelectionHeading />
        <QrCode />
        <SelectNameAuthorProfile
          name="مهلا شریعتی"
          publishDate="31 مرداد"
          readingTime=" 12 دقیقه برای خواندن"
          imageUrl="/assets/images/doctor.webp"
        />

        <div className="w-full sm:w-9/12 md:w-8/12 lg:w-6/12 px-3 pb-16">
          <AlphabetBtns
            bgColor1="Pink_300"
            bgColor2="Pink_100"
            textColor="Pink_900"
            list={PERSIAN_NAME_DICTIONARY}
            title="اسم دختر جدید و شیک بر اساس حروف الفبا(همراه با ریشه و معنی)"
            description="وقتی دنبال اسم دخترانه می‌گردی، یکی از بهترین راه‌ها اینه که از حروف الفبا شروع کنی. اینطوری انتخاب‌ها منظم‌تر و
        پیدا کردن زیباترین و با کلاس‌ترین اسم دختر راحت‌تر می‌شه. تو هر بخش، ۲۰ تا اسم دخترانه گذاشتیم که با اون حرف
        شروع می‌شن و می‌تونی کلی گزینه جذاب و جدید پیدا کنی، فقط کافیه روی حرف مورد نظرت کلیک کنی:"
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
              >{`انتخاب اسم دختر امروزی بر اساس حرف «${item[1].category}»`}</CustomTypography>

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

export default GirlNamePage;
