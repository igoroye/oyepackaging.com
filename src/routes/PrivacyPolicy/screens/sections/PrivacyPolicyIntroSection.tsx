import { Separator } from "../../components/ui/separator";

const definitions = [
  {
    term: "Data Controller:",
    description:
      "a natural or legal person, public authority, agency, or other body that, alone or jointly with others, determines the purposes and means of the processing of personal data.",
    hasLink: false,
  },
  {
    term: "GDPR:",
    description:
      "Regulation (EU) 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC",
    hasLink: true,
    linkText:
      "Regulation (EU) 2016/679 of the European Parliament and of the Council",
    beforeLink: "",
    afterLink:
      " on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC",
  },
  {
    term: "Personal Data:",
    description:
      "any information relating to an identified or identifiable natural person ('data subject'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person",
    hasLink: false,
  },
  {
    term: "Process or Processing:",
    description:
      "any operation or set of operations that is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.",
    hasLink: false,
  },
  {
    term: "Website:",
    description:
      "means website published by https://oyepackaging.com or any related domain names.",
    hasLink: true,
    linkText: "https://oyepackaging.com",
    beforeLink: "means website published by ",
    afterLink: " or any related domain names.",
  },
  {
    term: "Services:",
    description: "means any services offered or provided by ÖYE Packaging OÜ.",
    hasLink: false,
  },
  {
    term: "You or Your:",
    description:
      "any person using our Website or contacting us in order to make an inquiry with us.",
    hasLink: false,
  },
];

export const PrivacyPolicyIntroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] px-4">
      <Separator className="w-full" />

      <div className="w-full">
        <div className="flex flex-col w-full items-start gap-5">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
            DEFINITIONS
          </h2>

          {definitions.map((definition, index) => (
            <div
              key={index}
              className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
            >
              <span className="font-medium">{definition.term} </span>
              {definition.hasLink ? (
                <>
                  <span className="text-[#101014]">
                    {definition.beforeLink}
                  </span>
                  <span className="text-[#264eab]">{definition.linkText}</span>
                  <span className="text-[#101014]">{definition.afterLink}</span>
                </>
              ) : (
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
                  {definition.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
