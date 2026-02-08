import { ctaBannerService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import AlphabetBtns from '@components/SelectName/AlphabetBtns';
import AuthorProfile from '@components/SelectName/AuthorProfile';
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

        <SelectNameAuthorProfile publishDate="31 مرداد" readingTime=" 12 دقیقه برای خواندن" />

        <div className=" landing_container px-3 pb-16">
          <AlphabetBtns
            bgColor1="bg-impo_Blue_200"
            bgColor2="bg-impo_Blue_50"
            textColor="!text-impo_Blue_800"
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
                className="!text-impo_Neutral_OnBackground"
              >{`${item[1].labelTitle} «${item[1].category}»`}</CustomTypography>

              <NamesTable
                list={item[1].list}
                titleColor="!text-impo_PrimaryMan_OnPrimaryMan"
                titleBgColor="bg-impo_PrimaryMan_PrimaryMan"
                borderColor="border-impo_Blue_300"
                bgColor1="bg-impo_Blue_100"
                bgColor2="bg-impo_Blue_50"
              />
            </div>
          ))}
          
          <AuthorProfile
            name="مهلا شریعتی"
            imageUrl="/assets/images/doctor.webp"
            url="/author/681b4c84e92afe0c649c9d40"
          />
          <Description />
        </div>

        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default BoyNamePage;
