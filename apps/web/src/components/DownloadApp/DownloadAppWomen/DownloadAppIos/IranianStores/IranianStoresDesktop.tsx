import DownloadAppLinkGenerator from '@components/DownloadApp/DownloadAppLinkGenerator';
import CustomTypography from '@components/ui/CustomTypography';

import { IRANIAN_STORES_LIST } from '../constants';

const IranianStoresDesktop = () => {
  return (
    <>
      {IRANIAN_STORES_LIST.map((item, index) => (
        <div key={index} id={item.analyticsId}>
          <DownloadAppLinkGenerator id={item.id} href={item.linkTo}>
            <div className="flex items-center w-full gap-[10px] pr-9">
              {item.icon}

              <CustomTypography fontSize="Lable_Medium" className="!text-impo_Surface_OnSurfaceVariant">
                {item.title}
              </CustomTypography>
            </div>
          </DownloadAppLinkGenerator>
        </div>
      ))}
    </>
  );
};

export default IranianStoresDesktop;
