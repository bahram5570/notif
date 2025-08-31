const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[500px] relative">
      <>{children}</>
    </div>
  );
};

export default Layout;
