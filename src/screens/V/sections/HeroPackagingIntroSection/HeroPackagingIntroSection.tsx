export const HeroPackagingIntroSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-12 gap-8 lg:gap-16">
      {/* Left Content */}
      <div className="flex flex-col items-start max-w-full lg:max-w-[580px]">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-text text-2xl sm:text-3xl md:text-[44px] tracking-[0] leading-tight md:leading-[49px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          WE ARE ÖYE!
        </h2>

        <h1 className="w-full font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-[100px] leading-tight md:leading-[99px] [font-family:'Inter',Helvetica] text-text tracking-[0] mt-[3px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          PACKAGING
        </h1>

        <p className="max-w-full [font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg md:text-[22px] tracking-[0] leading-relaxed md:leading-8 mt-4 md:mt-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          We support the growth of coffee roasting companies by providing{" "}
          <span className="font-semibold">fully customized</span> packaging solutions and{" "}
          <span className="font-semibold">unique filling services</span>.
        </p>
      </div>

      {/* Right Content - Packaging Visualization */}
      <div className="relative w-full lg:w-auto lg:flex-1 flex items-center justify-center lg:justify-end translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="relative w-full max-w-[600px] h-[380px] sm:h-[420px] lg:h-[450px]">
          {/* Back Envelope - Large Gray */}
          <div className="absolute left-[20px] sm:left-[40px] bottom-[40px] sm:bottom-[50px] w-[240px] sm:w-[280px] lg:w-[320px] h-[240px] sm:h-[280px] lg:h-[320px] bg-[#ececec] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] z-0"></div>

          {/* Front Envelope - White with Rotation */}
          <div className="absolute left-[50px] sm:left-[70px] bottom-[60px] sm:bottom-[70px] w-[200px] sm:w-[240px] lg:w-[270px] h-[200px] sm:h-[240px] lg:h-[270px] bg-white rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.15)] z-10 -rotate-[18deg] flex items-end justify-start p-4 sm:p-5 lg:p-6">
            {/* Small ÖYE Logo on White Envelope */}
            <span className="text-main text-xl sm:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] lowercase">
              öye
            </span>
          </div>

          {/* Coffee Mug - Top Right */}
          <div className="absolute top-[20px] sm:top-[30px] right-[20px] sm:right-[40px] lg:right-[60px] w-[90px] sm:w-[100px] lg:w-[120px] h-[90px] sm:h-[100px] lg:h-[120px] bg-white rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.15)] flex items-center justify-center z-20">
            <span className="text-4xl sm:text-5xl lg:text-6xl">☕</span>
          </div>

          {/* Speech Bubbles - Stacked Vertically on Right Side */}
          <div className="absolute top-[10px] sm:top-[20px] right-0 flex flex-col items-end gap-3 sm:gap-4 z-30 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
            {/* Bubble 1 - Top */}
            <div className="relative">
              <svg className="absolute -bottom-[10px] left-[30px] w-[20px] h-[12px] z-0" viewBox="0 0 20 12" fill="none">
                <path d="M0 0L10 12L20 0H0Z" fill="#4169b5"/>
              </svg>
              <div className="relative bg-[#4169b5] text-white rounded-[22px] px-5 sm:px-6 py-3 sm:py-3.5 shadow-[0_4px_12px_rgba(65,105,181,0.3)]">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base lg:text-[18px] leading-tight whitespace-nowrap">
                  We produce packaging in Europe
                </p>
              </div>
            </div>

            {/* Bubble 2 - Middle (Wider) */}
            <div className="relative">
              <svg className="absolute -bottom-[10px] left-[30px] w-[20px] h-[12px] z-0" viewBox="0 0 20 12" fill="none">
                <path d="M0 0L10 12L20 0H0Z" fill="#4169b5"/>
              </svg>
              <div className="relative bg-[#4169b5] text-white rounded-[22px] px-5 sm:px-6 py-3 sm:py-3.5 shadow-[0_4px_12px_rgba(65,105,181,0.3)]">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base lg:text-[18px] leading-tight">
                  Create your dream coffee bag <span className="ml-1">😊</span>
                </p>
              </div>
            </div>

            {/* Bubble 3 - Bottom (Widest) */}
            <div className="relative">
              <svg className="absolute -bottom-[10px] left-[30px] w-[20px] h-[12px] z-0" viewBox="0 0 20 12" fill="none">
                <path d="M0 0L10 12L20 0H0Z" fill="#4169b5"/>
              </svg>
              <div className="relative bg-[#4169b5] text-white rounded-[22px] px-5 sm:px-6 py-3 sm:py-3.5 shadow-[0_4px_12px_rgba(65,105,181,0.3)]">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base lg:text-[18px] leading-tight whitespace-nowrap">
                  Launch a new coffee product with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
