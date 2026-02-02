import CustomLink from '@components/ui/CustomLink';

const AlphabetContent = () => {
  return (
    <>
      اگه تو دوران
      <CustomLink className="!text-impo_Primary_Primary mx-[3px] inline-block" href="/pregnancy">
        بارداری
      </CustomLink>
      هستی و سونوگرافی یا
      <CustomLink
        className="!text-impo_Primary_Primary mx-[3px] inline-block"
        href="/pregnancy-symptoms-of-having-a-girl"
      >
        علائم صد در صد جنین دختر
      </CustomLink>
      بهت خبر دادن که قراره یک فرشته کوچولوی خوشگل داشته باشی، پس حتما انتخاب یک
      <CustomLink className="!text-impo_Primary_Primary mx-[3px] inline-block" href="/landing/girl-name">
        اسم دختر
      </CustomLink>
      ایرانی خاص ذهن خودت و اطرافیانتو حسابی درگیر کرده. یادت نره که مرور اسم‌های دخترانه ایرانی شیک بر اساس حروف الفبا
      و گلچین کردن اسم‌هایی که می‌پسندی، بهترین روشه.
      <span className="block w-full h-4 mt-2"></span>
      فقط کافیه حرف اول مورد نظرت رو در جدول زیر انتخاب کنی تا مجموعه‌ای از زیباترین و خاص‌ترین اسم دخترانه فارسی رو
      مشاهده کنی.
    </>
  );
};

export default AlphabetContent;
