const LoadingContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden z-[80]">{children}</div>;
};

export default LoadingContainer;
