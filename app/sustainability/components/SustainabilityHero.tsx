export function SustainabilityHero() {
  return (
    <section className="relative w-full py-12 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#7ba0d0] bg-white flex items-center justify-center">
          <img
            src="/images/sustainability/seedling-icon.svg"
            alt="Sustainability"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
        <div>
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight mb-4">
            INNOVATING FOR
            <br />
            A SUSTAINABLE TOMORROW
          </h1>
          <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-relaxed max-w-2xl mx-auto">
            We love packaging, are dedicated to innovation, and are committed to a sustainable
            <br className="hidden sm:block" />
            future in packaging!
          </p>
        </div>
      </div>
    </section>
  )
}
