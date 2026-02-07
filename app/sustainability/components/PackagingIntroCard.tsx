export function PackagingIntroCard() {
  return (
    <section className="relative w-full py-8">
      <div className="relative bg-bg-beige rounded-[20px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 sm:p-10 md:p-12 lg:p-16">
          <div>
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-2xl sm:text-3xl md:text-4xl tracking-[0] leading-tight mb-4">
              <span className="text-main">ÖYE PACKAGING </span>
              <span className="text-text">IS</span>
              <br />
              <span className="text-text">MORE THAN A COMPANY</span>
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-relaxed">
              We build an eco-system that can bring many
              <br className="hidden sm:block" />
              people together to build a better future.
            </p>
          </div>

          <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[320px]">
            <img
              src="/images/sustainability/hero-sust.webp"
              alt="Earth with greenery"
              className="w-[260px] sm:w-[320px] h-auto relative z-10"
            />

            <div className="absolute top-4 right-0 sm:top-4 sm:right-4 z-20 flex flex-col items-end gap-2">
              <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                <img
                  src="/images/logo.svg"
                  alt="ÖYE Logo"
                  className="w-16 h-auto"
                />
              </div>
              <div className="bg-main rounded-[16px] px-4 py-3 shadow-lg">
                <p className="[font-family:'Inter',Helvetica] font-medium text-white text-xs sm:text-sm tracking-[0] leading-tight">
                  We produce
                  <br />
                  packaging in Europe
                </p>
              </div>
            </div>

            <div className="absolute bottom-12 right-16 sm:bottom-16 sm:right-20 w-8 h-8 bg-[#249369] rounded-full z-20" />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 w-9 h-9 bg-bord rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  )
}
