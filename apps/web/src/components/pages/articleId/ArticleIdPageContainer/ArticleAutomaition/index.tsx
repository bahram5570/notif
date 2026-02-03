'use client';

import { useEffect, useState } from 'react';

import autoArticleImg from '@assets/images/autoArticleImg.webp';

import Dialog from '@mui/material/Dialog';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import LeadSteps from './LeadSteps';
import { LeadPopupProps, Step } from './types';
import { useScrollHandler } from './useScrollHandler';

export default function ArticleAutomaition({ threshold = 50 }: LeadPopupProps = {}) {
  const passed = useScrollHandler(threshold);
  const [open, setOpen] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  const [step, setStep] = useState<Step>('phone');
  const isDesktop = useMediaQuery('(min-width: 640px)');

  useEffect(() => {
    if (hasBeenClosed) return;

    if (passed && !open) {
      setOpen(true);
    }
  }, [passed, open, hasBeenClosed]);

  const handleClose = () => {
    setOpen(false);
    setHasBeenClosed(true);
  };

  if (!passed) return null;

  if (isDesktop) {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{ className: 'rounded-2xl bg-white shadow-2xl overflow-hidden' }}
      >
        <div className="relative px-6 pt-5 pb-3 border-b border-gray-200">
          <h2 className="text-xl font-bold text-center">ثبت شماره</h2>
          <button onClick={handleClose} className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-xl">
            ✕
          </button>
        </div>
        <LeadSteps step={step} setStep={setStep} onClose={handleClose} />
      </Dialog>
    );
  }

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      onOpen={() => {}}
      disableSwipeToOpen
      PaperProps={{ className: 'rounded-t-2xl bg-white  shadow-2xl' }}
    >
      <div className="!bg-impo_Primary_Primary relative">
        <button onClick={handleClose} className="absolute top-6 left-6 text-white text-xl">
          ✕
        </button>
        <div className="w-[72px] h-[2px] mx-auto my-3 bg-gray-200 rounded-full" />
        <div className="mt-[14px] flex items-center px-4 justify-between">
          <div className="grid pt-5">
            <CustomTypography fontSize="Title_Small" className="!text-white">
              راهنمای کامل بارداری سریع
            </CustomTypography>
            <CustomTypography fontSize="Body_Large" className="!text-white">
              از زمان طلایی اقدام تا افزایش باروری
            </CustomTypography>
          </div>
          <CustomImage alt="image" src={autoArticleImg} width={105} />
        </div>
      </div>
      <div className="!bg-impo_Neutral_Background">
        <LeadSteps step={step} setStep={setStep} onClose={handleClose} />
      </div>
    </SwipeableDrawer>
  );
}
