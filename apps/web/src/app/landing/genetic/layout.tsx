const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[640px] relative">
      <>{children}</>
    </div>
  );
};

export default Layout;
