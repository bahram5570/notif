import React from 'react';

import WebIcon from '@assets/icons/web.svg';

import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import DownloadAppLinkGenerator from '@components/DownloadApp/DownloadAppLinkGenerator';
import CustomTypography from '@components/ui/CustomTypography';
import styled from '@emotion/styled';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { DOWNLOAD_MODAL_QUERY_NAME, IRANIAN_STORES_LIST } from '../constants';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-container': {
    alignItems: 'flex-end',
  },
  '& .MuiPaper-root': {
    margin: 0,
    width: '100%',
    maxWidth: 'none',
    borderRadius: '16px 16px 0 0',
  },
});

const IranianStoresMobile = () => {
  const router = useRouter();
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(DOWNLOAD_MODAL_QUERY_NAME) !== null;

  return (
    <>
      <div
        onClick={() => newQueryParamsHandler({ [DOWNLOAD_MODAL_QUERY_NAME]: 'true' })}
        className="
                  w-full 
                  h-12 
                  lg:h-[60px] 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-impo_White dark:bg-impo_Surface_SurfaceVariant
                  border-[1px]
                  border-impo_Surface_OutlineVariant                
                "
      >
        <WebIcon className="w-6 min-w-6 h-auto" />

        <CustomTypography fontSize="Lable_Medium" className="!text-impo_Surface_OnSurfaceVariant">
          استور‌های ایرانی
        </CustomTypography>
      </div>

      <StyledDialog open={isOpen} onClose={() => router.back()} TransitionComponent={Transition}>
        <div className="w-full grid grid-cols-2 gap-1 px-4 py-6 bg-impo_Neutral_Surface">
          {IRANIAN_STORES_LIST.map((item, index) => (
            <div key={index} id={item.analyticsId}>
              <DownloadAppLinkGenerator href={item.linkTo} id={item.id}>
                <div className="flex items-center w-full gap-[10px] pr-9">
                  {item.icon}

                  <CustomTypography fontSize="Lable_Medium" className="!text-impo_Neutral_OnBackground">
                    {item.title}
                  </CustomTypography>
                </div>
              </DownloadAppLinkGenerator>
            </div>
          ))}
        </div>
      </StyledDialog>
    </>
  );
};

export default IranianStoresMobile;
