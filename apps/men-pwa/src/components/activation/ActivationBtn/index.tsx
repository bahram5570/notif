import { useEffect, useRef } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { ActivationBtnProps } from './types';

const ActivationBtn = (props: ActivationBtnProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // # Call onClick function when Enter/Go is pressed, then remove input focus

      if (e.key === 'Enter' && props.showBtn) {
        e.preventDefault();
        const btnElement = btnRef.current;

        if (btnElement) {
          btnElement.click();
        }

        (document.activeElement as HTMLElement)?.blur();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [props.onClick]);

  return (
    <div
      className={`w-full flex justify-center duration-200 ${props.showBtn ? 'translate-y-0' : 'translate-y-[50vh]'}`}
    >
      <CustomButton
        ref={btnRef}
        fontSize="Lable_Large"
        onClick={props.onClick}
        testId={props.btnTestId}
        isLoading={props.isLoading}
        navigationLoadingId={props.navigationLoadingId}
        className="w-[204px] !min-w-fit !bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
      >
        {props.children}
      </CustomButton>
    </div>
  );
};

export default ActivationBtn;
