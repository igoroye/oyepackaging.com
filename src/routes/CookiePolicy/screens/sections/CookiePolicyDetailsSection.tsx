import { Separator } from "../../components/ui/separator";

const cookieTypes = [
  {
    title: "Essential Cookies:",
    description:
      "These cookies are necessary for the website to work properly. These include basic functions such as website navigation or providing restricted access.",
  },
  {
    title: "Preference Cookies:",
    description:
      "These cookies are intended to recall details about how a website appears to suit the needs of a particular visitor. For example, the preferred language or region.",
  },
  {
    title: "Analytics Cookies:",
    description:
      "These cookies help ÖYE Packaging OÜ to understand how visitors of the website interact with the website by collecting and transmitting information anonymously. The information that is kept in these types of cookies cannot be associated with any specific person/visitor.",
  },
];

const analyticsDetails = [
  {
    label: "Cookie type:",
    value: "Google Analytics",
  },
  {
    label: "Description:",
    value:
      "For the purpose of enhancing a website's navigation and appearance, Google Analytics gathers statistical data from analytical cookies. In order for ÖYE Packaging OÜ to better understand visitors of the website, Google supplements the aggregate data with demographics and interest information.",
  },
  {
    label: "How to manage cookies:",
    value: "Google Analytics Opt-out",
    isLink: true,
  },
];

const marketingCookies = [
  {
    title: "Marketing Cookies:",
    description:
      "These cookies track website visitors' actions throughout the website in order to display personalized offers and advertisements.",
  },
];

const marketingCookieDetails = [
  {
    type: "Advertising",
    description: "Deliver behavioral/targeted advertising",
    management: "Accept/refuse via browser setting",
  },
  {
    type: "Market analysis",
    description: "Conduct market analysis",
    management: "Accept/refuse via browser setting",
  },
  {
    type: "Campaign/promotion",
    description: "Measure the effectiveness of the campaign",
    management: "Accept/refuse via browser setting",
  },
  {
    type: "Fraud detection",
    description: "Detect click fraud",
    management: "Accept/refuse via browser setting",
  },
];

const uncategorizedCookie = {
  title: "Uncategorized Cookies",
  description:
    "These cookies are cookies that are in the process of being categorized.",
};

export const CookiePolicyDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          WHAT TYPE OF COOKIES DO WE USE?
        </h2>

        {cookieTypes.map((cookie, index) => (
          <p
            key={`cookie-type-${index}`}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            <span className="font-medium">• {cookie.title}</span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {" "}
              {cookie.description}
            </span>
          </p>
        ))}

        {analyticsDetails.map((detail, index) => (
          <p
            key={`analytics-detail-${index}`}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            <span className="font-medium text-[#101014]">{detail.label}</span>
            <span className="text-[#101014]">&nbsp;</span>
            <span
              className={
                detail.isLink
                  ? "text-[#264eab]"
                  : "[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"
              }
            >
              {detail.value}
            </span>
          </p>
        ))}

        {marketingCookies.map((cookie, index) => (
          <p
            key={`marketing-cookie-${index}`}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            <span className="font-medium">• {cookie.title}</span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {" "}
              {cookie.description}
            </span>
          </p>
        ))}

        {marketingCookieDetails.map((detail, index) => (
          <p
            key={`marketing-detail-${index}`}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            <span className="font-medium">Cookie type:</span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {" "}
              {detail.type}{" "}
            </span>
            <span className="font-medium">Description:</span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {" "}
              {detail.description}{" "}
            </span>
            <span className="font-medium">
              How to manage cookies{index === 0 ? "" : ":"}
            </span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {index === 0 ? "" : " "}
              {index === 0 ? ": " : ""}
              {detail.management}
            </span>
          </p>
        ))}

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
            •
          </span>
          <span className="font-medium"> {uncategorizedCookie.title}</span>
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
            : {uncategorizedCookie.description}
          </span>
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
