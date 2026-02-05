export const CoffeeProductsSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-12">
      <div className="relative w-full max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {/* Coffee Packaging Card */}
          <div className="relative bg-[#7ba0d0] rounded-[20px] overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[400px] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-start">
            {/* Title */}
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl tracking-[0] leading-tight text-center mb-4 md:mb-6 z-10">
              COFFEE PACKAGING
            </h3>
            
            {/* Button */}
            <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 rounded-full border-2 border-white text-white [font-family:'Inter',Helvetica] font-medium text-sm sm:text-base tracking-[0.48px] hover:bg-white hover:text-[#7ba0d0] transition-colors z-10">
              LEARN MORE
            </button>
            
            {/* Decorative Image */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-[65%] flex items-end justify-center pointer-events-none">
              <img
                className="w-full h-full object-cover object-bottom"
                alt=""
                src="/images/home-page/products-section.png"
              />
            </div>
          </div>

          {/* Coffee Services Card */}
          <div className="relative bg-[#f5f5ef] rounded-[10px] overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[400px] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-start">
            {/* Button */}
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-main text-main [font-family:'Inter',Helvetica] font-medium text-sm sm:text-base tracking-[0.48px] hover:bg-main hover:text-white transition-colors z-10">
              LEARN MORE
            </button>

            {/* Decorative Image */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-[65%] flex items-end justify-center pointer-events-none">
              <img
                className="w-full h-full object-cover object-bottom"
                alt=""
                src="/images/home-page/services-section.png"
              />
            </div>
          </div>
        </div>

        {/* Try It Out Section */}
        <div className="relative w-full bg-[#e8eef5] rounded-[10px] overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[400px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-16 lg:px-20 z-10">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-tight mb-6 md:mb-8">
              TRY IT OUT!
            </h2>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-text text-text [font-family:'Inter',Helvetica] font-medium text-sm sm:text-base md:text-lg tracking-[0.48px] hover:bg-text hover:text-white transition-colors">
              ORDER SAMPLE KIT
            </button>
          </div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Sample kit showcase"
            src="https://c.animaapp.com/mko0yo41F03JfF/img/mask-group.png"
          />
        </div>
      </div>
    </section>
  );
};
