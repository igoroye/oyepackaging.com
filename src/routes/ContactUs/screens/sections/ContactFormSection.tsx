import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";

export const ContactFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-[600px]">
      <div className="mb-8">
        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl md:text-[44px] tracking-[0] leading-tight md:leading-[49px] mb-4">
          CONTACT US
        </h1>
        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          Have questions about our packaging solutions? We're here to help! Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
              First Name *
            </label>
            <Input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
              required
            />
          </div>
          <div>
            <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
              Last Name *
            </label>
            <Input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
              required
            />
          </div>
        </div>

        <div>
          <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
            Email Address *
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
              Phone Number
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
            />
          </div>
          <div>
            <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
              Company
            </label>
            <Input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
            />
          </div>
        </div>

        <div>
          <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
            Subject *
          </label>
          <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
            <SelectTrigger className="h-12 rounded-[10px] border border-[#e5e5e5] px-4">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="packaging">Packaging Solutions</SelectItem>
              <SelectItem value="pricing">Pricing Information</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="partnership">Partnership Opportunities</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
            Message *
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="min-h-[120px] rounded-[10px] border border-[#e5e5e5] px-4 py-3 resize-none"
            placeholder="Tell us about your packaging needs..."
            required
          />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
            className="mt-1"
            required
          />
          <label htmlFor="consent" className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[18px] cursor-pointer">
            <span className="text-[#101014]">
              I consent to processing of my personal data in accordance with ÖYE! Packaging{" "}
            </span>
            <span className="font-semibold text-[#264eab] cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </label>
        </div>

        <Button
          type="submit"
          className="h-auto px-8 py-4 bg-main rounded-[40px] border-2 border-[#264eab] hover:bg-[#1e3d8f] transition-colors w-full md:w-auto"
        >
          <span className="text-white text-lg tracking-[0.54px] [font-family:'Inter',Helvetica] font-medium leading-[normal]">
            SEND MESSAGE
          </span>
        </Button>
      </form>
    </div>
  );
};
