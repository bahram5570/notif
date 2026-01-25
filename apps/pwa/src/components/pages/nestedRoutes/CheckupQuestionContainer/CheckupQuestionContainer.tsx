const CheckupQuestionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-t-lg rounded-b-lg flex flex-row relative bg-impo_Neutral_Background">
      <div className="absolute right-0 top-0 bottom-0 w-1  rounded-r-lg bg-impo_Primary_Primary"></div>
      {children}
    </div>
  );
};

export default CheckupQuestionContainer;
