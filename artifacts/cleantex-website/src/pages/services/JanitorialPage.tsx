import { Building2 } from "lucide-react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function JanitorialPage() {
  return (
    <ServicePageTemplate
      title="Janitorial Services"
      subtitle="Managed cleaning for offices, facilities and commercial spaces"
      heroSubtext="Ongoing janitorial services for offices, commercial buildings and facilities across Abuja. Trained teams, regular schedules, all supplies included."
      icon={Building2}
      whyItMatters={[
        "A clean workplace directly affects staff productivity, client impressions and the overall professionalism of your business. Ad-hoc cleaning is rarely consistent enough for a high-functioning office environment.",
        "Our janitorial service gives you a managed, reliable cleaning operation. We handle the scheduling, the team and the supplies so your facility is always maintained to a professional standard.",
      ]}
      whatWeOffer={[
        "Daily, weekly or custom schedule cleaning",
        "Office floors, surfaces and workstations",
        "Toilets and bathroom facilities",
        "Reception and common areas",
        "Kitchen and canteen cleaning",
        "Waste collection and disposal",
        "Window and glass cleaning",
        "Replenishment of consumables (soap, tissue, etc.)",
      ]}
      whatYouGet={[
        "Dedicated, trained cleaning team",
        "All cleaning supplies included",
        "Flexible contract terms",
        "Supervisor oversight and quality checks",
        "Discreet service around your working hours",
      ]}
      howItWorks={[
        "Contact us with details of your facility and requirements",
        "We conduct a site visit and provide a tailored proposal",
        "We agree a schedule and contract",
        "Your facility is maintained to a consistent standard from day one",
      ]}
      faqs={[
        { q: "Can you clean outside of office hours?", a: "Yes. We work around your schedule and can carry out cleaning early morning, evenings or weekends to avoid disruption." },
        { q: "Do you supply consumables like soap and toilet paper?", a: "Yes. We can include consumable replenishment as part of the service package." },
        { q: "What is the minimum contract length?", a: "We offer flexible contract terms. Contact us to discuss what works for your business." },
      ]}
      closingHeadline="A cleaner workplace, consistently delivered"
      waMessage="Hello Cleantex! I'd like to enquire about your Janitorial Services. Please share more details."
    />
  );
}
