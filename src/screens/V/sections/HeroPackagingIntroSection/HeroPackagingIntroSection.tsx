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
        <img
          className="w-full max-w-[400px] h-auto"
          alt="Packaging illustration"
          src="/images/home-page/bubbles.png"
        />
      </div>
    </section>
  );
};
