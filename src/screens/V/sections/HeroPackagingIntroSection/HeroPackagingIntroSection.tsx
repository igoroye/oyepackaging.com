export const HeroPackagingIntroSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[100px] py-6 md:py-10 gap-8 lg:gap-12">
      {/* Left Content */}
      <div className="flex flex-col items-start max-w-full lg:max-w-[600px]">
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

      {/* Right Content - Card with Speech Bubbles */}
      <div className="relative w-full lg:w-auto lg:flex-1 flex items-center justify-center lg:justify-end translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="relative w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[550px] h-[400px] sm:h-[450px] lg:h-[500px]">
          {/* Background Card/Envelope - Bottom Left */}
          <div className="absolute left-0 bottom-[50px] sm:bottom-[60px] lg:bottom-[80px] w-[280px] sm:w-[320px] lg:w-[360px] h-[240px] sm:h-[270px] lg:h-[300px] bg-[#e5e5e5] rounded-[20px] shadow-md flex items-center justify-center z-0">
            <span className="text-main text-3xl sm:text-4xl lg:text-5xl font-bold [font-family:'Inter',Helvetica]">
              ÖYE
            </span>
          </div>

          {/* Coffee Mug - Top Right of Card */}
          <div className="absolute top-[20px] sm:top-[30px] lg:top-[40px] right-[20px] sm:right-[30px] lg:right-[40px] w-[90px] sm:w-[100px] lg:w-[110px] h-[90px] sm:h-[100px] lg:h-[110px] bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <span className="text-4xl sm:text-5xl">☕</span>
          </div>

          {/* Speech Bubbles - Stacked Vertically on Right Side */}
          <div className="absolute top-[80px] sm:top-[100px] lg:top-[120px] right-0 flex flex-col items-end gap-3 sm:gap-4 z-20 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
            {/* Bubble 1 - Top */}
            <div className="relative w-fit">
              <div className="bg-[#3d5fa9] text-white rounded-[25px] px-5 py-3 shadow-lg">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base leading-tight whitespace-nowrap">
                  We produce packaging in Europe
                </p>
              </div>
              {/* Tail pointing down-left */}
              <div className="absolute left-[30px] -bottom-[8px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#3d5fa9]"></div>
            </div>

            {/* Bubble 2 - Middle (Wider) */}
            <div className="relative w-fit">
              <div className="bg-[#3d5fa9] text-white rounded-[25px] px-5 py-3 shadow-lg">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base leading-tight whitespace-nowrap">
                  Create your dream coffee bag 🤩
                </p>
              </div>
              {/* Tail pointing down-left */}
              <div className="absolute left-[30px] -bottom-[8px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#3d5fa9]"></div>
            </div>

            {/* Bubble 3 - Bottom (Widest) */}
            <div className="relative w-fit">
              <div className="bg-[#3d5fa9] text-white rounded-[25px] px-5 py-3 shadow-lg">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base leading-tight whitespace-nowrap">
                  Launch a new coffee product with us
                </p>
              </div>
              {/* Tail pointing down-left */}
              <div className="absolute left-[30px] -bottom-[8px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#3d5fa9]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
