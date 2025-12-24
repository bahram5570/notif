import { buttonColorsMaker, fontSizeMaker } from './__utils__';

import { Button } from '@mui/material';

import CustomTypography from '../CustomTypography';
import Spinner from '../Spinner';
import { CustomButtonTypes } from './types';

const CustomButton = (props: CustomButtonTypes) => {
  const buttonColors = buttonColorsMaker(props);
  const fontSize = fontSizeMaker(props.fontSize);

  const clickHandler = () => {
    if (props.onClick && !props.isLoading && !props.isDisable) {
      props.onClick();
    }
  };

  const children = props.children;
  const isChildrenText = typeof children === 'string' && typeof children === 'string';

  return (
    <Button
      id={props.id}
      title="CustomButton"
      onClick={clickHandler}
      aria-label="CustomButton"
      disabled={props.isDisable}
      sx={{
        cursor: 'pointer',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderRadius: '999px',
        textTransform: 'none',
        borderColor: buttonColors.borderColor,
        opacity: props.isDisable ? '0.5' : '1',
        backgroundColor: buttonColors.backgroundColor,
        ...props.style,
      }}
      className={`h-[40px] w-[175px] px-4 ${props.className}`}
    >
      {props.isLoading && <Spinner className="!border-impo_Grey_300" />}

      {!props.isLoading && (
        <>
          {isChildrenText && (
            <CustomTypography
              fontSize={fontSize}
              className="w-full flex justify-center"
              style={{ color: buttonColors.color }}
            >
              {children}
            </CustomTypography>
          )}

          {!isChildrenText && <>{children}</>}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
