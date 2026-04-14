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
        "Bathroom scrubbing and sanitising",
        "Floor scrubbing",
        "Ceiling fans and light fittings",
        "Window tracks and blinds",
        "Behind and underneath furniture and appliances",
        "Wall spot-cleaning",
      ]}
      addOns={[
        "Descaling (toilets, sinks and tiles)",
        "Floor polishing",
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
      beforeAfter={{
        image: `${import.meta.env.BASE_URL}images/deep-clean-before-after.jpg`,
        imageAlt: "Deep cleaning before and after - heavily soiled surface restored to clean",
        before: "Built-up grime, mould, bacteria and stains on surfaces, floors and hidden areas",
        after: "Thoroughly cleaned, sanitised surfaces with no trace of dirt, mould or odour",
        disclaimer: "Results depend on the condition and age of the build-up. We will always be upfront about what is achievable.",
      }}
      gallery={[
        { src: `${import.meta.env.BASE_URL}images/deep-clean-before-after.jpg`, alt: "Deep cleaning before and after - grimy surface restored to spotless" },
        { src: `${import.meta.env.BASE_URL}images/deep-clean-light-fitting.jpg`, alt: "Cleantex technician cleaning ceiling light fitting" },
        { src: `${import.meta.env.BASE_URL}images/deep-clean-img_6182.jpg`, alt: "Cleantex deep cleaning work" },
        { src: `${import.meta.env.BASE_URL}images/deep-clean-img_6444_2.jpg`, alt: "Cleantex deep cleaning work" },
        { src: `${import.meta.env.BASE_URL}images/deep-clean-img_6597.jpg`, alt: "Cleantex deep cleaning work" },
        { src: `${import.meta.env.BASE_URL}images/deep-clean-img_6637.jpg`, alt: "Cleantex deep cleaning work" },
      ]}
      closingHeadline="Ready for a truly clean space?"
      waMessage="Hello Cleantex! I'd like to enquire about your Deep Cleaning service. Please share more details."
    />
  );
}
