const SensitivePointsBodyResultPage = () => {
  return (
    <div className="lg:w-10/12 lg:mx-auto ">
      <div
        className="  flex justify-center     min-h-[190px]   lg:max-h-96 "
        style={{
          // backgroundImage: " url('/assets/images/sympathyLandingBackground.webp')",
          backgroundImage:
            "linear-gradient(135deg, rgba(186, 39, 255, 0.2), rgba(133, 25, 218, 0.2)), url('/assets/images/sensitive/bg.webp')",
          filter: 'blur(120px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(186, 39, 255, 0.2), rgba(133, 25, 218, 0.2))',
            filter: 'blur(120px)',
          }}
        /> */}
      </div>
    </div>
  );
};

export default SensitivePointsBodyResultPage;
