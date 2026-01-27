import { Separator } from "../../components/ui/separator";

const rightsData = [
  {
    label: "a. Access.",
    description:
      "You have the right to be informed about the Processing of Your Personal Data.",
  },
  {
    label: "b. Rectification",
    description:
      ". You have the right to access Your Personal Data and request corrections if any inaccuracies are found. If your Personal Data is incomplete or outdated, You can request that it be updated or amended.",
  },
  {
    label: 'c. Erasure ("Right to be Forgotten").',
    description:
      "You have the right to request the deletion of your personal data. We will erase Your data unless we have a legitimate reason to retain it.",
  },
  {
    label: "d. Restriction on Processing.",
    description:
      "You have the right to request the restriction of processing your personal data. Exceptions as outlined in Article 18 of the GDPR may apply.",
  },
  {
    label: "e. Data Portability.",
    description:
      "You have the right to request that your personal data be transferred to another organization or directly to you in a structured, commonly used, and machine-readable format.",
  },
  {
    label: "f. Right to Withdraw Consent.",
    description:
      "You have the right to withdraw your consent to the processing of your personal data at any time. Once consent is withdrawn, we will cease processing your data unless there is a legal basis to continue processing without your consent.",
  },
  {
    label: "g. Right to Object.",
    description:
      "You have the right to object to the processing of your personal data in certain situations, such as for direct marketing purposes or where the processing is based on our legitimate interests. If you object, we will stop processing your data unless there are compelling legitimate grounds for the processing.",
  },
  {
    label: "h. Right to Lodge a Complaint.",
    description:
      "You have the right to lodge a complaint with the appropriate data protection authority if you believe that your personal data has been processed in a manner that violates your rights.",
  },
];

export const DataSharingAndTransfersSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          YOUR RIGHTS
        </h2>

        {rightsData.map((right, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            <span className="font-medium">{right.label}</span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {right.label === "d. Restriction on Processing." && <>&nbsp;</>}
              {right.description}
            </span>
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
