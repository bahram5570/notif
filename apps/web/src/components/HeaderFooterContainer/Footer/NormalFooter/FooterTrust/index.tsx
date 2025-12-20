import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';

const FooterTrust = () => {
  return (
    <div className="flex items-center justify-center gap-12 md:col-span-4">
      <CustomLink
        target="_blank"
        aria-label="FooterTrust"
        className="relative w-[86px] h-[86px]"
        href="https://logo.samandehi.ir/logo.aspx?id=316386&p=qftinbpdwlbqqftiaqgwwlbq"
      >
        <CustomImage src="/assets/images/samandehi.webp" fill={true} alt="samandehi" sizes="100px" />
      </CustomLink>

      <CustomLink
        target="_blank"
        aria-label="FooterTrust"
        className="relative w-[76px] h-[76px]"
        href="https://trustseal.enamad.ir/?id=225142&code=FxndcR03u9wEbt07YRbq"
      >
        <CustomImage src="/assets/images/enamad.webp" fill={true} alt="enamad" sizes="100px" />
      </CustomLink>
    </div>
  );
};

export default FooterTrust;
