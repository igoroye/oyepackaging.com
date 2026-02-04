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
        <div className="relative w-full max-w-[550px] sm:max-w-[650px] lg:max-w-[750px] h-[350px] sm:h-[400px] lg:h-[450px]">
          {/* Back Envelope - Large Gray */}
          <div className="absolute left-0 bottom-[20px] sm:bottom-[30px] lg:bottom-[40px] w-[260px] sm:w-[300px] lg:w-[340px] h-[260px] sm:h-[300px] lg:h-[340px] bg-[#e8e8e8] rounded-[24px] shadow-lg z-0"></div>

          {/* Front Envelope - White with Rotation */}
          <div className="absolute left-[40px] sm:left-[50px] lg:left-[60px] bottom-[40px] sm:bottom-[50px] lg:bottom-[60px] w-[220px] sm:w-[250px] lg:w-[280px] h-[220px] sm:h-[250px] lg:h-[280px] bg-white rounded-[20px] shadow-xl z-10 -rotate-[15deg] flex items-end justify-start p-4 sm:p-5 lg:p-6">
            {/* Small ÖYE Logo on White Envelope */}
            <span className="text-main text-xl sm:text-2xl lg:text-3xl font-bold [font-family:'Inter',Helvetica]">
              öye
            </span>
          </div>

          {/* Coffee Mug - Top Right */}
          <div className="absolute top-0 right-[60px] sm:right-[80px] lg:right-[100px] w-[100px] sm:w-[110px] lg:w-[120px] h-[100px] sm:h-[110px] lg:h-[120px] bg-white rounded-full shadow-xl flex items-center justify-center z-20 border-4 border-gray-100">
            <span className="text-5xl sm:text-6xl">☕</span>
          </div>

          {/* Speech Bubbles - Stacked Vertically on Right Side */}
          <div className="absolute top-[10px] sm:top-[20px] lg:top-[30px] right-0 flex flex-col items-end gap-3 sm:gap-4 z-30 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
            {/* Bubble 1 - Top */}
            <div className="relative w-fit">
              <div className="bg-[#3d5fa9] text-white rounded-[25px] px-6 py-3.5 shadow-lg">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base leading-tight whitespace-nowrap">
                  We produce packaging in Europe
                </p>
              </div>
              {/* Tail pointing down-left */}
              <div className="absolute left-[35px] -bottom-[8px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#3d5fa9]"></div>
            </div>

            {/* Bubble 2 - Middle (Wider) */}
            <div className="relative w-fit">
              <div className="bg-[#3d5fa9] text-white rounded-[25px] px-6 py-3.5 shadow-lg">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base leading-tight whitespace-nowrap">
                  Create your dream coffee bag 😊
                </p>
              </div>
              {/* Tail pointing down-left */}
              <div className="absolute left-[35px] -bottom-[8px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#3d5fa9]"></div>
            </div>

            {/* Bubble 3 - Bottom (Widest) */}
            <div className="relative w-fit">
              <div className="bg-[#3d5fa9] text-white rounded-[25px] px-6 py-3.5 shadow-lg">
                <p className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base leading-tight whitespace-nowrap">
                  Launch a new coffee product with us
                </p>
              </div>
              {/* Tail pointing down-left */}
              <div className="absolute left-[35px] -bottom-[8px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#3d5fa9]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
