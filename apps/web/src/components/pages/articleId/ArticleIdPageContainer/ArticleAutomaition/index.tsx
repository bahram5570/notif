'use client';

import { useEffect, useState } from 'react';

import ArrowBack from '@assets/icons/arrowBack.svg';

import Dialog from '@mui/material/Dialog';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';

import CustomButton from '@components/ui/CustomButton';

import HeaderContent from './HeaderContent';
import LeadSteps from './LeadSteps';
import { useScrollHandler } from './_hooks/useScrollHandler';
import { LeadPopupProps, Step } from './types';

export default function ArticleAutomaition({ threshold = 50, contentCategory }: LeadPopupProps) {
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
        PaperProps={{ className: '!rounded-[16px] bg-white shadow-2xl overflow-hidden' }}
      >
        <div className="pt-[14px] flex items-center px-4 justify-between !bg-impo_Primary_Primary">
          <CustomButton onClick={handleClose} className="absolute top-2 right-5 text-white text-lg !p-0 !m-0 h-fit">
            ✕
          </CustomButton>
          <HeaderContent title={contentCategory.title} subtitle={contentCategory.subtitle} />
        </div>
        <div className="!bg-impo_Neutral_Background">
          <LeadSteps step={step} setStep={setStep} onClose={handleClose} contentCategoryId={contentCategory.id} />
        </div>
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
      PaperProps={{ className: 'rounded-t-2xl bg-white shadow-2xl' }}
    >
      <div className="!bg-impo_Primary_Primary relative">
        <CustomButton
          onClick={handleClose}
          className="absolute top-6 left-6 text-white text-xl !h-fit !p-0 !m-0"
          fontSize="Title_Medium"
        >
          ✕
        </CustomButton>

        {step === 'otp' && (
          <CustomButton
            fontSize="Title_Medium"
            onClick={() => setStep('phone')}
            className="absolute top-[22px] right-6 text-white text-xl !h-fit !p-0 !m-0"
          >
            <ArrowBack />
          </CustomButton>
        )}

        <div className="w-[72px] h-[2px] mx-auto my-3 bg-gray-200 rounded-full" />
        <div className="mt-[14px] flex items-center px-4 justify-between">
          <HeaderContent title={contentCategory.title} subtitle={contentCategory.subtitle} />
        </div>
      </div>
      <div className="!bg-impo_Neutral_Background">
        <LeadSteps step={step} setStep={setStep} onClose={handleClose} contentCategoryId={contentCategory.id} />
      </div>
    </SwipeableDrawer>
  );
}
