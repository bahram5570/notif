const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="landing_container w-full bg-impo_White  relative min-h-[100dvh]">
      <>{children}</>
    </div>
  );
};

export default Layout;
