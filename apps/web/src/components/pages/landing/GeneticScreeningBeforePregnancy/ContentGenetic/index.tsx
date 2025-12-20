import geneticTest from '@assets/images/geneticTest.webp';
import { ctaBannerService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';
import ArticleIdFaq from '@components/pages/articleId/ArticleIdPageContainer/ArticleIdFaq';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { FAQS } from './constants';

const ContentGenetic = async () => {
  const { ctaData: cta1 } = await ctaBannerService('clinic2');
  const { ctaData: cta2 } = await ctaBannerService('ovulation5');

  return (
    <div className="w-full flex flex-col gap-5 pt-10 pb-10 px-4 sm:px-0 lg:w-10/12 lg:mx-auto">
      <CustomTypography tagType="h1" fontSize="Title_Medium">
        راهنما کامل آزمایش ژنتیک قبل از بارداری و تست آنلاین رایگان
      </CustomTypography>
      <CustomTypography className="text-justify" tagType="p">
        آزمایش ژنتیک قبل از بارداری، که اغلب به عنوان غربالگری ناقل شناخته می‌شود، یک تست ارزیابی است که به زوج‌ها کمک
        می‌کند تا خطر انتقال اختلالات ژنتیکی به فرزندان خود را قبل از اقدام به بارداری ارزیابی کنند.
        <strong>
          این آزمایش‌ها با بررسی DNA والدین، اطلاعاتی در مورد احتمال وجود ژن‌های معیوب که می‌توانند منجر به بیماری‌های
          ژنتیکی در فرزندان شوند، ارائه می‌دهند.
        </strong>
      </CustomTypography>
      <CustomTypography className="text-justify" tagType="p">
        آگاهی از این خطرات به زوج‌ها این امکان را می‌دهد تا تصمیمات آگاهانه‌تری در مورد فرزندآوری بگیرند و برای مدیریت
        یا پیشگیری از مشکلات احتمالی و آمادگی برای بارداری، برنامه‌ریزی کنند. این رویکرد پیشگیرانه نه تنها به کاهش
        احتمال تولد نوزادان مبتلا به بیماری‌های ژنتیکی کمک می‌کند، بلکه به زوج‌ها آرامش خاطر بیشتری در مسیر والد شدن
        می‌بخشد. اگر نمی‌دانید که انجام آزمایش ژنتیک قبل از بارداری برای شما ضروری است یا خیر پیشنهاد می‌کنیم ابتدا تست
        آنلاین و رایگان بالا را انجام دهید.
      </CustomTypography>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Small">
          آزمایش ژنتیک قبل از بارداری شامل چه مواردی است؟
        </CustomTypography>

        <CustomTypography className="pt-4 pb-2" tagType="p">
          آزمایش ژنتیک قبل از بارداری، شامل مجموعه‌ای از ارزیابی‌ها است که برای شناسایی خطر انتقال اختلالات ژنتیکی به
          فرزندان طراحی شده‌اند. این آزمایش‌ها به دو دسته اصلی تقسیم می‌شوند:
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h3" fontSize="Title_Small">
          1. غربالگری ناقل
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          <strong>
            غربالگری ناقل، که اغلب بر روی نمونه‌های خون یا بزاق انجام می‌شود، به دنبال ژن‌های مرتبط با بیماری‌های خاص در
            DNA والدین می‌گردد.
          </strong>
          این آزمایش مشخص می‌کند که آیا والدین ژنی مرتبط با یک اختلال ارثی را دارند یا خیر.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          این نوع غربالگری معمولاً به افرادی توصیه می‌شود که سابقه خانوادگی اختلالات ژنتیکی دارند یا متعلق به گروه‌های
          قومی خاصی هستند که در معرض خطر بیشتری برای برخی بیماری‌ها قرار دارند.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h3" fontSize="Title_Small">
          2. آزمایش‌های تشخیصی
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          آزمایش‌های تشخیصی، اطلاعات مشخص و قطعی در مورد اینکه آیا نوزاد یک اختلال ژنتیکی دارد ارائه می‌دهند. این
          آزمایش‌ها می‌توانند بسیاری از شرایط ژنتیکی ناشی از ناهنجاری‌های کروموزومی را شناسایی کنند و معمولاً به والدین
          اطلاع می‌دهند که آیا نوزادشان بیماری ژنتیکی خاصی دارد یا خیر. برای آشنایی با انواع
          <CustomLink href="/genetic-testing" color="Primary_Primary">
            آزمایش ژنتیک
          </CustomLink>
          مقاله آن را می‌توانید مطالعه کنید.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Small">
          آزمایش ژنتیک قبل از بارداری برای چیست؟
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          <strong>
            آزمایش ژنتیک قبل از به بارداری، با هدف ارزیابی خطر انتقال اختلالات ژنتیکی به فرزندان انجام می‌شود.
          </strong>
          این آزمایش‌ها به زوجین کمک می‌کنند تا قبل از
          <CustomLink href="/trying-to-get-pregnant" color="Primary_Primary">
            اقدام به بارداری
          </CustomLink>
          ، از وجود ژن‌های جهش‌یافته مرتبط با بیماری‌های ارثی در DNA خود آگاه شوند. با انجام این غربالگری، می‌توان
          احتمال بروز اختلالات ژنتیکی در جنین را پیش‌بینی کرد، اگرچه نوع دقیق بیماری ژنتیکی مشخص نمی‌شود.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          این اطلاعات به زوج‌ها امکان می‌دهد تا با آگاهی کامل از خطرات احتمالی، تصمیمات بهتری در مورد فرزندآوری اتخاذ
          کنند و در صورت لزوم، از روش‌های کمک باروری مانند IVF
          <CustomLink href="/ivf-assisted-reproduction" color="Primary_Primary">
            (آی وی اف)
          </CustomLink>
          همراه با تشخیص ژنتیکی قبل از
          <CustomLink href="/bleeding-nesting" color="Primary_Primary">
            لانه‌گزینی
          </CustomLink>
          (PGT) برای کاهش خطر ابتلا به بیماری در فرزند خود استفاده کنند.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Small">
          چه نوع اختلالاتی با آزمایش ژنتیک قبل بارداری تشخیص داده می‌شود؟
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          با آزمایش ژنتیک قبل از بارداری، می‌توان طیف وسیعی از اختلالات ژنتیکی را تشخیص داد. در ادامه، مهم‌ترین انواع
          این بیماری‌ها را معرفی می‌کنیم:
        </CustomTypography>
        <ul className="mr-4 mt-4">
          <CustomTypography className="list-disc" tagType="li">
            <CustomTypography tagType="h3">بیماری‌های تک ژنی</CustomTypography>
          </CustomTypography>
          <CustomTypography className="pt-4 pb-2" tagType="p">
            این دسته شامل بیماری‌هایی مانند فیبروز سیستیک، کم‌خونی داسی‌شکل،
            <CustomLink href="/thalassemia" color="Primary_Primary">
              تالاسمی
            </CustomLink>
            بیماری تای-ساکس و دیستروفی عضلانی دوشن است. این بیماری‌ها ناشی از جهش در یک ژن خاص هستند.
          </CustomTypography>
          <CustomTypography className="list-disc" tagType="li">
            <CustomTypography tagType="h3">ناهنجاری‌های کروموزومی</CustomTypography>
            <CustomTypography className="pt-4 pb-2" tagType="p">
              این آزمایش‌ها می‌توانند ناهنجاری‌های کروموزومی مانند سندرم داون (تریزومی 21)، سندرم ادواردز (تریزومی 18) و
              سندرم پاتو (تریزومی 13) را تشخیص دهند. همچنین، تغییرات در تعداد کروموزوم‌های جنسی مانند سندرم ترنر(
              مونوزومی X ) و سندرم کلاین‌فلتر (XXY) نیز قابل شناسایی هستند.
            </CustomTypography>
          </CustomTypography>
          <CustomTypography className="list-disc" tagType="li">
            <CustomTypography tagType="h3">بیماری‌های چند عاملی</CustomTypography>
            <CustomTypography className="pt-4 pb-2" tagType="p">
              اگرچه تشخیص این نوع بیماری‌ها پیچیده‌تر است، اما آزمایش‌های ژنتیکی می‌توانند استعداد ژنتیکی فرد به
              بیماری‌هایی مانند بیماری‌های قلبی، دیابت و برخی از انواع سرطان را نشان دهند.
            </CustomTypography>
          </CustomTypography>
        </ul>
      </div>
      <CustomImage alt="چه نوع اختلالاتی با آزمایش ژنتیک قبل بارداری تشخیص داده می‌شود؟" src={geneticTest} />
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Small">
          آزمایش ژنتیک قبل از بارداری چگونه انجام می‌شود؟
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          <strong>آزمایش ژنتیک قبل از بارداری، از طریق بررسی نمونه‌های خون یا بافت‌های بدن والدین صورت می‌گیرد.</strong>
          در این فرآیند، DNA استخراج شده از نمونه‌ها، برای شناسایی ژن‌های معیوب یا جهش‌های ژنتیکی مرتبط با بیماری‌های
          ارثی مورد بررسی قرار می‌گیرد.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          پزشکان با استفاده از این آزمایش‌ها قادرند احتمال انتقال این ژن‌ها به جنین را تعیین کنند.
          <strong>
            انواع مختلفی از بافت‌ها مانند خون، پوست، استخوان، و بزاق دهان برای انجام آزمایش ژنتیک مورد استفاده قرار
            می‌گیرند.
          </strong>
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Small">
          چه کسانی باید آزمایش ژنتیک قبل از بارداری بدهند؟
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          آزمایش ژنتیک قبل از اقدام به بارداری به طور خاص برای زوج‌هایی که در معرض خطر بیشتری برای انتقال اختلالات
          ژنتیکی به فرزندانشان هستند، توصیه می‌شود. به زوج‌هایی با سابقه خانوادگی اختلالات ژنتیکی،
          <CustomLink href="/sterility" color="Primary_Primary">
            ناباروری
          </CustomLink>
          ،
          <CustomLink href="/abortion" color="Primary_Primary">
            سقط جنین‌
          </CustomLink>
          های مکرر یا مرده‌زایی، توصیه می‌شود حتما این آزمایشات را انجام دهند. همچنین، افرادی که در یک گروه نژادی یا
          قومی خاص قرار دارند که شیوع اختلالات ژنتیکی خاصی در آن بیشتر است، باید این آزمایش را جدی در نظر بگیرند.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          علاوه بر این، زوج‌های مسن‌تر نیز به دلیل افزایش خطر اختلالات ژنتیکی در فرزندان، بهتر است آزمایش ژنتیک قبل از
          بارداری را انجام دهند. با این حال، حتی زوج‌هایی که هیچ سابقه خانوادگی یا عوامل خطر شناخته‌شده‌ای ندارند،
          می‌توانند از این آزمایش بهره‌مند شوند تا اطلاعات بیشتری در مورد سابقه سلامتی خود به دست آورند و از وجود ژن‌های
          ناقل بیماری‌های ژنتیکی آگاه شوند. برای آشنایی با لیست تمامی
          <CustomLink href="/pre-pregnancy-tests" color="Primary_Primary">
            آزمایشات قبل بارداری
          </CustomLink>
          ، مقاله آن را بهتر است مطالعه کنید.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          اگر نمی‌دانید که انجام آزمایش ژنتیک قبل بارداری برای شما ضروری است یا خیر، ابتدا تست آنلاین و رایگان در ابتدای
          این مقاله را انجام دهید. در این تست بعد از پاسخ به چند سوال، ریسک ابتلا به بیماری‌های ژنتیکی در سه حالت پایین،
          متوسط و بالا برای شما اندازه گیری می‌شود. سپس با توجه به نتیجه تست، اقدامات بعدی را مشاهده می‌کنید.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          همچنین، در اپلیکیشن ایمپو می‌توانید سوالات خود را به صورت آنلاین از متخصص ژنتیک و دکتر زنان، بپرسید و مشاوره
          ژنتیک قبل از بارداری دریافت کنید. در بخش اشتراک تجربه ایمپو نیز می‌توانید با دیگر کاربرانی که شرایط مشابه شما
          دارند تبادل نظر کنید و سوالات خود را بپرسید.
        </CustomTypography>
      </div>
      {cta1 && <CtaBanner {...cta1} />}
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Medium">
          آزمایش ژنتیک قبل از بارداری ازدواج فامیلی
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          <strong>
            در ازدواج‌های فامیلی، به دلیل اشتراک ژنتیکی بیشتر بین زوجین، احتمال انتقال ژن‌های مغلوب بیماری‌زا به فرزندان
            افزایش می‌یابد.
          </strong>
          آزمایش ژنتیک قبل از بارداری در این موارد، با هدف شناسایی احتمال وقوع جهش در ژن‌ها و خطر بروز بیماری‌های ارثی
          اتوزومال مغلوب انجام می‌شود. از آنجایی که افراد فامیل ژن‌های خود را از یک جد مشترک دریافت می‌کنند، احتمال
          اینکه هر دو نفر حامل جهش در یک ژن خاص باشند بیشتر است؛ در نتیجه،
          <strong>خطر بروز بیماری در فرزندان تا 25٪ افزایش می‌یابد.</strong>
          این آزمایش‌ها می‌توانند مشکلات بالقوه سلامتی که ممکن است بر باروری فرد تأثیر بگذارد و همچنین برخی از
          بیماری‌های ارثی را شناسایی کنند.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          <strong>
            آزمایش ژنتیک ازدواج فامیلی می‌تواند بر روی یک نفر یا همزمان برای هر دو فرد انجام شود و نوع تست با در نظر
            گرفتن همه جوانب در جلسه مشاوره ژنتیک قبل از بارداری مشخص خواهد شد.
          </strong>
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Medium">
          قیمت آزمایش ژنتیک قبل بارداری
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          قیمت آزمایش ژنتیک قبل از بارداری تحت تاثیر عوامل متعددی قرار دارد و می‌تواند متغیر باشد. نوع آزمایش ژنتیکی که
          انجام می‌شود، یکی از مهم‌ترین عوامل تعیین‌کننده هزینه است. آزمایش‌ها می‌توانند شامل PGT-A، PGT-M و PGT-SR
          باشند که هر کدام روش‌ها و هزینه‌های متفاوتی دارند.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          علاوه بر این، استفاده از دستگاه‌ها و ابزار خاص، مواد مصرفی مانند کیت‌ها، آنزیم‌ها و پرایمرها، و دستمزد پزشکان
          و کادر درمانی نیز در تعیین هزینه نقش دارند. در مواردی که نیاز به ارسال نمونه به آزمایشگاه‌های خارج از کشور
          باشد، هزینه ارسال نیز به قیمت نهایی اضافه می‌شود. به طور کلی، هزینه آزمایش‌های ژنتیکی پیش از لانه گزینی
          (PGD/PGT) در ایران می‌تواند از <strong> ۱ میلیون تومان تا ۱۰ میلیون تومان</strong> متغیر باشد. برای اطلاع دقیق
          از قیمت‌ها، توصیه می‌شود با آزمایشگاه‌های معتبر تماس بگیرید.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Medium">
          جواب آزمایش ژنتیک قبل بارداری چقدر طول می‌کشد؟
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          به دلیل پیچیدگی‌های موجود در آزمایش ژنتیک، مدت زمان لازم برای دریافت جواب نهایی می‌تواند
          <strong>از چند هفته تا چند ماه</strong> متغیر باشد. در مواردی، نیاز است آزمایش‌های بیشتری انجام شود که این امر
          می‌تواند زمان دریافت نتیجه را طولانی‌تر کند.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Medium">
          جواب آزمایش ژنتیک قبل از بارداری چقدر قابل اطمینان است؟
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          جواب آزمایش ژنتیک قبل از بارداری، به ویژه آزمایش غربالگری ناقل، از دقت تحلیلی بسیار بالایی برخوردار است و
          می‌تواند تا <strong>99.9٪</strong> جهش‌های ژنتیکی ارثی را با استفاده از تکنولوژی‌های پیشرفته توالی‌یابی DNA
          مانند NGS شناسایی کند.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          با این حال، تفسیر نتایج و تعیین خطر واقعی انتقال بیماری به فرزندان نیازمند بررسی دقیق و انطباق با استانداردها
          و دستورالعمل‌های معتبر مانند کالج آمریکایی ژنتیک پزشکی و ژنومیک (ACMG) است. در صورتی که هر دو والد ناقل ژن‌های
          جهش‌یافته یکسانی برای بیماری‌های ناتوان‌کننده و کشنده باشند، خطر بیمار شدن نوزاد 25٪ و احتمال ناقل شدن 50٪
          خواهد بود.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          در این شرایط، مشاوره ژنتیک قبل از بارداری و بررسی گزینه‌های تشخیصی مانند آزمایشات دوران بارداری یا استفاده از
          فناوری کمک باروری مانند IVF با آزمایش ژنتیکی قبل از لانه‌گزینی (PGT) توصیه می‌شود تا جنین‌های سالم برای انتقال
          انتخاب شوند. PGT جنین‌ها را قبل از انتقال به رحم غربالگری می‌کند تا زوج‌ها بتوانند تصمیمات آگاهانه‌ای در مورد
          مراحل بعدی خود در فرآیند IVF بگیرند.
        </CustomTypography>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Medium">
          جمع‌بندی
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          به طور خلاصه، آزمایش های ژنتیک قبل از بارداری ابزاری ارزشمند برای زوج‌هایی است که قصد فرزندآوری دارند و
          می‌خواهند خطر انتقال بیماری‌های ژنتیکی به نسل بعد را ارزیابی کنند. این آزمایش‌ها، که شامل غربالگری ناقل
          می‌شوند، می‌توانند جهش‌های ژنتیکی پنهان در DNA والدین را شناسایی کرده و به آن‌ها کمک کنند تا درک بهتری از
          خطرات احتمالی داشته باشند.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          با داشتن اطلاعات آزمایشات قبل بارداری، زوج‌ها می‌توانند تصمیمات آگاهانه‌تری در مورد بارداری، مانند استفاده از
          روش‌های کمک‌باروری مانند IVF با تشخیص ژنتیکی پیش از لانه‌گزینی (PGD)، یا انتخاب عدم بارداری، بگیرند. در نهایت،
          هدف از آزمایش ژنتیک قبل از بارداری، اطمینان از سلامت مادر و جنین و فراهم کردن امکان انتخاب‌های آگاهانه برای
          زوج‌ها در مسیر فرزندآوری است.
        </CustomTypography>
        <CustomTypography className="pt-4 pb-2" tagType="p">
          اپلیکیشن ایمپو از زمان اقدام به بارداری تا پس از زایمان و در دوران شیردهی، مانند یک دوست و مشاور هوشمند و آگاه
          همراه شماست.
        </CustomTypography>
      </div>
      {cta2 && <CtaBanner {...cta2} />}
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Medium">
          منابع
        </CustomTypography>
        <div className="mt-4">
          <CustomLink
            href="https://www.ivf.com.au/blog/why-all-couples-should-consider-genetic-carrier-screening-prior-to-conceiving"
            color="Primary_Primary"
            target="_blank"
          >
            IVF
          </CustomLink>
        </div>
        <div>
          <CustomLink
            href="https://www.uchicagomedicine.org/conditions-services/pregnancy-childbirth/high-risk-pregnancy-maternal-fetal-medicine/prenatal-diagnosis-genetics"
            color="Primary_Primary"
            target="_blank"
          >
            uchicagomedicine
          </CustomLink>
        </div>
      </div>
      <div>
        <CustomTypography tagType="h2" fontSize="Title_Medium" className="mb-4">
          سوالات متداول
        </CustomTypography>
        <ArticleIdFaq faqs={FAQS} />
      </div>
    </div>
  );
};

export default ContentGenetic;
