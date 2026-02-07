const waysItems = [
  {
    icon: "/images/sustainability/target-audience.svg",
    title: "PEOPLE AND INITIATIVE",
    text: "Great results come from people who are ready to bring their ideas and improve the existing ones. For us, it means everything, and every initiative that makes our company better, more sustainable, and more efficient is always welcome!",
  },
  {
    icon: "/images/sustainability/drive-layers.svg",
    title: "MATERIALS",
    text: "We source materials exclusively from reliable, certified, and traceable sources. Our goal is to be transparent with customers and guide and educate them in this field so that they can find solutions that work specifically in each country.",
  },
  {
    icon: "/images/sustainability/broom-icon.svg",
    title: "WASTE MANAGEMENT",
    text: "We follow a strategy of minimal waste in production and constantly improve it. Our ultimate goal is to reach 5% waste by 2030.",
  },
  {
    icon: "/images/sustainability/co2-cloud-icon.svg",
    title: "CO2 NEUTRAL",
    text: "Our company strives to balance the amount of carbon dioxide we emit and the amount we remove from the atmosphere.",
  },
]

export function WaysWeMeanSection() {
  return (
    <section className="relative w-full py-12">
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl sm:text-4xl tracking-[0] leading-tight text-center mb-12">
        OUR WAYS MEAN
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-10">
        {waysItems.map((item, index) => (
          <div key={index} className="flex flex-col items-start text-left gap-3">
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14"
            />
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-tight">
              {item.title}
            </h3>
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start text-left gap-3 max-w-full">
        <img
          src="/images/sustainability/seedling-icon.svg"
          alt="Full Transparency"
          className="w-14 h-14"
        />
        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-tight">
          FULL TRANSPARENCY
        </h3>
        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-relaxed">
          Being transparent means being honest and open about our processes, decisions, and their impacts. We believe in sharing the full story behind our production, from material sourcing to waste management and emissions. Transparency helps build trust and accountability, inspiring others to join us on the path toward sustainability.
        </p>
      </div>
    </section>
  )
}
