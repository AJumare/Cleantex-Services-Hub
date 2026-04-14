import { Bug } from "lucide-react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function FumigationPage() {
  return (
    <ServicePageTemplate
      title="Fumigation & Pest Control"
      subtitle="Effective, safe elimination of pests from your home or business"
      heroSubtext="Professional fumigation and pest control for homes and commercial premises across Abuja. Safe for families, pets and the environment."
      icon={Bug}
      whyItMatters={[
        "Abuja's warm climate is ideal for pests. Cockroaches, rodents, termites, mosquitoes and ants can establish themselves quickly and cause significant damage to health and property.",
        "Over-the-counter products rarely solve the root problem. A professional treatment reaches nesting sites, breeding grounds and entry points that DIY solutions miss.",
      ]}
      whatWeOffer={[
        "Cockroach treatment",
        "Rodent (rat and mouse) control",
        "Mosquito fogging and spraying",
        "Termite treatment",
        "General household pest control",
        "Commercial and office pest management",
      ]}
      addOns={[
        "Bed bug treatment",
      ]}
      whatYouGet={[
        "Virtual consultation before treatment",
        "Safe, regulated pesticides",
        "Treatment of nesting and entry points",
        "Follow-up advice to prevent recurrence",
        "Professional, uniformed technicians",
      ]}
      howItWorks={[
        "Contact us via WhatsApp with details of the pest problem",
        "We assess and recommend the appropriate treatment",
        "We schedule a convenient visit",
        "Treatment is carried out safely and thoroughly",
      ]}
      faqs={[
        { q: "Is the treatment safe for children and pets?", a: "The chemicals used are not safe for children or pets during and immediately after treatment. All occupants — including pets — are expected to vacate the premises for at least 48 hours. We will give you clear instructions before we begin." },
        { q: "How long does the treatment last?", a: "This varies by pest type and environment. We will advise on expected duration and any follow-up treatments required." },
        { q: "Do you offer recurring pest control contracts?", a: "Yes. We offer scheduled maintenance packages for homes and businesses. Contact us for details." },
      ]}
      beforeAfter={{
        carousel: [
          { src: `${import.meta.env.BASE_URL}images/fumigation-spray-1.jpg`, alt: "Cleantex technician carrying fumigation equipment" },
          { src: `${import.meta.env.BASE_URL}images/fumigation-fogger.jpg`, alt: "Cleantex technician fogging premises during pest control treatment" },
        ],
        before: "Active pest infestation — cockroaches, rodents, mosquitoes or termites causing damage and health risks",
        after: "Treated, pest-free premises with nesting and entry points addressed and prevention advice provided",
        disclaimer: "Results depend on the pest type, extent of infestation and property conditions. We will assess and advise before any treatment begins.",
      }}
      closingHeadline="Take back your space from pests"
      waMessage="Hello Cleantex! I'd like to enquire about your Fumigation & Pest Control service. Please share more details."
    />
  );
}
