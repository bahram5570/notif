import { ContentCardContainerPropsType } from './type';

const ContentCardContainer = ({ bgUrl, children }: ContentCardContainerPropsType) => {
  const background = `url(${bgUrl})`;

  return (
    <div className="rounded-xl  bg-cover bg-center bg-impo_Neutral_Background" style={{ backgroundImage: background }}>
      {children}
    </div>
  );
};

export default ContentCardContainer;
