export const CookiePolicyTitleSection = (): JSX.Element => {
  const textSegments = [
    { text: "ÖYE Packaging OÜ website ", color: "text-[#101014]" },
    { text: "oyepackaging.com ", color: "text-[#264eab]" },
    { text: "or ", color: "text-[#101014]" },
    { text: "www.oyepackaging.com", color: "text-[#264eab]" },
    {
      text: ' uses "cookies". ÖYE Packaging OÜ makes use of a consent management platform (CMP)',
      color: "text-[#101014]",
    },
  ];

  return (
    <div className="w-full max-w-[916px] mx-auto px-4">
      <p className="text-text text-[22px] text-center leading-8 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
        {textSegments.map((segment, index) => (
          <span key={index} className={segment.color}>
            {segment.text}
          </span>
        ))}
      </p>
    </div>
  );
};
