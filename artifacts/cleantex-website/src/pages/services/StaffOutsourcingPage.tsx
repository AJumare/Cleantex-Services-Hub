import { Users } from "lucide-react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function StaffOutsourcingPage() {
  return (
    <ServicePageTemplate
      title="Cleaning Staff Outsourcing"
      subtitle="Vetted, trained cleaning personnel deployed to your organisation"
      heroSubtext="We supply professional cleaning staff to businesses and organisations across Abuja. They work on your premises, under your supervision - flexible contracts, zero recruitment stress."
      icon={Users}
      whyItMatters={[
        "Recruiting, vetting and training in-house cleaning staff takes time and resources that many businesses prefer to direct elsewhere. Turnover in this role can also be high, creating operational gaps.",
        "Our staff outsourcing service removes that burden entirely. We supply trained, vetted personnel who are ready to work, while you retain full day-to-day supervision over how they operate.",
      ]}
      whatWeOffer={[
        "Individual cleaners for offices and business premises",
        "Cleaning teams for larger facilities",
        "Short-term and long-term placement options",
        "Event and one-off staffing",
        "Replacement cover when staff are unavailable",
      ]}
      whatYouGet={[
        "Pre-vetted and background-checked personnel",
        "Trained to Cleantex standards",
        "Managed by you on-site",
        "Flexible contract terms",
        "Quick deployment with no lengthy hiring process",
      ]}
      howItWorks={[
        "Contact us with your staffing requirements",
        "We match you with suitable, trained personnel",
        "Staff are deployed to your site on an agreed start date",
        "You supervise day-to-day; we handle HR and welfare",
      ]}
      faqs={[
        { q: "Who is responsible for the staff on-site?", a: "Day-to-day supervision is your responsibility. We handle the employment relationship, welfare and any HR matters on our end." },
        { q: "What happens if a staff member is absent?", a: "We provide cover as part of the arrangement to ensure your operations are not disrupted." },
        { q: "Can I request a specific number of staff?", a: "Yes. We can supply individual personnel or a team depending on the size of your facility and your requirements." },
      ]}
      closingHeadline="The right people, ready when you need them"
      waMessage="Hello Cleantex! I'd like to enquire about your Cleaning Staff Outsourcing service. Please share more details."
    />
  );
}
