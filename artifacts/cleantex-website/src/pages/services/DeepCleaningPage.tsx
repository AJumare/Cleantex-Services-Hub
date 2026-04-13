import { SprayCan } from "lucide-react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function DeepCleaningPage() {
  return (
    <ServicePageTemplate
      title="Deep Cleaning"
      subtitle="A level of clean that regular tidying cannot achieve"
      heroSubtext="Top-to-bottom deep cleaning for homes, offices and commercial spaces. We go beyond the surface to leave every corner spotless."
      icon={SprayCan}
      whyItMatters={[
        "Regular cleaning keeps a space looking tidy, but it does not remove the built-up grime in hard-to-reach areas. Over time, dust, grease, bacteria and allergens accumulate behind appliances, inside cupboards, in grout lines and under furniture.",
        "A professional deep clean addresses all of this, creating a healthier environment and restoring your space to a truly clean standard.",
      ]}
      whatWeOffer={[
        "Kitchen deep clean (appliances, cupboards, surfaces)",
        "Bathroom scrubbing and descaling",
        "Floor scrubbing and polishing",
        "Ceiling fans and light fittings",
        "Window tracks and blinds",
        "Behind and underneath furniture and appliances",
        "Wall spot-cleaning",
      ]}
      whatYouGet={[
        "Thorough room-by-room checklist",
        "Industrial-grade equipment and products",
        "Trained, uniformed technicians",
        "Eco-friendly, family-safe cleaning agents",
        "Reliable and punctual service",
      ]}
      howItWorks={[
        "Send us a message on WhatsApp",
        "Share details or pictures of your space",
        "Receive a clear, no-obligation quote",
        "We schedule and handle everything from there",
      ]}
      faqs={[
        { q: "How long does a deep clean take?", a: "This depends on the size and condition of the space. A typical home takes 3 to 6 hours. We will give you an accurate estimate after assessing your space." },
        { q: "Do I need to be present during the clean?", a: "Not necessarily. Many clients arrange access and we handle the rest. You are welcome to stay if you prefer." },
        { q: "How often should I deep clean?", a: "We recommend a full deep clean every 3 to 6 months, with more frequent sessions during the harmattan season." },
      ]}
      closingHeadline="Ready for a truly clean space?"
      waMessage="Hello Cleantex! I'd like to enquire about your Deep Cleaning service. Please share more details."
    />
  );
}
