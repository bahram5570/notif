import React from 'react';

import WebIcon from '@assets/icons/web.svg';

import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import CustomTypography from '@components/ui/CustomTypography';
import styled from '@emotion/styled';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import DownloadAppLinkGenerator from '../../DownloadAppLinkGenerator';
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
    padding: '24px',
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
        className="w-full h-12 px-2 bg-impo_White border-[1px] border-impo_Neutral_Surface rounded-full flex items-center justify-center gap-[10px] cursor-pointer"
      >
        <WebIcon className="w-6 min-w-6 h-auto" />

        <CustomTypography fontSize="Lable_Medium" className="!text-impo_Black">
          استور‌های ایرانی
        </CustomTypography>
      </div>

      <StyledDialog open={isOpen} onClose={() => router.back()} TransitionComponent={Transition}>
        <div className="w-full grid grid-cols-2 gap-1">
          {IRANIAN_STORES_LIST.map((item, index) => (
            <div key={index} id={item.analyticsId}>
              <DownloadAppLinkGenerator href={item.linkTo} id={item.id}>
                <div className="flex items-center w-full gap-[10px] pr-9">
                  {item.icon}

                  <CustomTypography fontSize="Lable_Medium" className="!text-impo_Black">
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
