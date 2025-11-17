const iosWeightMatcher = (no: number) => {
  return no * (1 - 0.04);
};

const iosSizeMatcher = (no: number) => {
  return no * (1 + 0.09);
};

export const FONTS_ANDROID = {
  Headline: {
    Large: {
      fontWeight: 700,
      fontSize: 40,
      lineHeight: '115%',
      letterSpacing: '-0.72px',
    },
    Medium: {
      fontWeight: 700,
      fontSize: 22,
      lineHeight: '200%',
      letterSpacing: '-0.33px',
    },
    Small: {
      fontWeight: 700,
      fontSize: 19,
      lineHeight: '150%',
      letterSpacing: '-0.285px',
    },
  },
  Title: {
    Large: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '140%',
      letterSpacing: '-0.36px',
    },
    Medium: {
      fontWeight: 600,
      fontSize: 19,
      lineHeight: '140%',
      letterSpacing: '-0.285px',
    },
    Small: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '140%',
      letterSpacing: '-0.24px',
    },
  },
  Body: {
    Large: {
      fontWeight: 400,
      fontSize: 15,
      lineHeight: '160%',
      letterSpacing: '-0.225px',
    },
    Medium: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: '160%',
      letterSpacing: '-0.325px',
    },
    Small: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '160%',
      letterSpacing: '-0.3px',
    },
  },
  Lable: {
    LargeProminet: {
      fontWeight: 700,
      fontSize: 15,
      lineHeight: '140%',
      letterSpacing: '-0.15px',
    },
    Large: {
      fontWeight: 550,
      fontSize: 15,
      lineHeight: '140%',
      letterSpacing: '-0.375px',
    },
    MediumProminet: {
      fontWeight: 700,
      fontSize: 13,
      lineHeight: '160%',
      letterSpacing: '-0.195px',
    },
    Medium: {
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '160%',
      letterSpacing: '-0.195px',
    },
    SmallProminet: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '130%',
      letterSpacing: '-0.18px',
    },
    Small: {
      fontWeight: 600,
      fontSize: 11,
      lineHeight: '130%',
      letterSpacing: '-0.165px',
    },
  },
};

export const FONTS_IOS = {
  Headline: {
    Large: {
      fontWeight: 550,
      fontSize: 40,
      lineHeight: '115%',
      letterSpacing: '-0.375px',
    },
    Medium: {
      fontWeight: 550,
      fontSize: 24,
      lineHeight: '200%',
      letterSpacing: '-0.375px',
    },
    Small: {
      fontWeight: 550,
      fontSize: 19,
      lineHeight: '150%',
      letterSpacing: '-0.5px',
    },
  },
  Title: {
    Large: {
      fontWeight: 450,
      fontSize: 24,
      lineHeight: '130%',
      letterSpacing: '-0.36px',
    },
    Medium: {
      fontWeight: 450,
      fontSize: 19,
      lineHeight: '140%',
      letterSpacing: '-0.285px',
    },
    Small: {
      fontWeight: 450,
      fontSize: 16,
      lineHeight: '140%',
      letterSpacing: '-0.24px',
    },
  },
  Body: {
    Large: {
      fontWeight: 350,
      fontSize: 16,
      lineHeight: '160%',
      letterSpacing: '-0.225px',
    },
    Medium: {
      fontWeight: 350,
      fontSize: 14,
      lineHeight: '180%',
      letterSpacing: '-0.425px',
    },
    Small: {
      fontWeight: 350,
      fontSize: 13,
      lineHeight: '160%',
      letterSpacing: '-0.3px',
    },
  },
  Lable: {
    LargeProminet: {
      fontWeight: 550,
      fontSize: 16,
      lineHeight: '140%',
      letterSpacing: '-0.375px',
    },
    Large: {
      fontWeight: 450,
      fontSize: 16,
      lineHeight: '140%',
      letterSpacing: '-0.375px',
    },
    MediumProminet: {
      fontWeight: 550,
      fontSize: 14,
      lineHeight: '160%',
      letterSpacing: '-0.7px',
    },
    Medium: {
      fontWeight: 450,
      fontSize: 14,
      lineHeight: '160%',
      letterSpacing: '-0.195px',
    },
    SmallProminet: {
      fontWeight: 550,
      fontSize: 12,
      lineHeight: '130%',
      letterSpacing: '-0.18px',
    },
    Small: {
      fontWeight: 350,
      fontSize: 11,
      lineHeight: '130%',
      letterSpacing: '-0.165px',
    },
  },
};
