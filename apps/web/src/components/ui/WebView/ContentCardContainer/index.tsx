import { COLORS_LIST } from '@theme/colors';

import { ContentCardContainerPropsType } from './type';

const ContentCardContainer = ({ bgUrl, children }: ContentCardContainerPropsType) => {
  const background = `url(${bgUrl})`;

  return (
    <div
      className="rounded-xl  bg-cover bg-center"
      style={{ backgroundColor: COLORS_LIST.Neutral_Background, backgroundImage: background }}
    >
      {children}
    </div>
  );
};

export default ContentCardContainer;
