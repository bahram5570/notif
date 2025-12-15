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
import { NAME_SELECTION_BANNER_NAME_2, PERSIAN_BOY_NAME_DICTIONARY } from './constants';

const BoyNamePage = async () => {
  const { ctaData } = await ctaBannerService(NAME_SELECTION_BANNER_NAME_2);
  const dataEntries = Object.entries(PERSIAN_BOY_NAME_DICTIONARY);

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

        <div className=" landing_container px-3 pb-16">
          <AlphabetBtns
            bgColor1="Blue_200"
            bgColor2="Blue_50"
            textColor="Blue_800"
            list={PERSIAN_BOY_NAME_DICTIONARY}
            title="انتخاب اسم پسر خاص و تک بر اساس حروف الفبا(همراه با ریشه و معنی)"
            description="اگه دنبال یه راه آسون ولی هیجان‌انگیز برای انتخاب اسم پسر کمیاب و متفاوت هستین، چرا از حروف الفبا شروع نکنین؟
                          مرور اسم‌ها به ترتیب حروف، نه‌تنها کمکتون می‌کنه گزینه‌های متنوع‌تری ببینین، بلکه باعث می‌شه راحت‌تر اسمی رو
                          پیدا کنین که با سلیقه‌تون جور در میاد؛ در این بخش، اسم پسر خاص و تک رو بر اساس حروف الفبا گلچین کردیم:"
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
                tagType="h2"
                fontSize="Headline_Small"
              >{`${item[1].labelTitle} «${item[1].category}»`}</CustomTypography>

              <NamesTable
                list={item[1].list}
                titleBgColor="Blue_500"
                borderColor="Blue_300"
                bgColor1="Blue_100"
                bgColor2="Blue_50"
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

export default BoyNamePage;
